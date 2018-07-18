import { db } from './firebase';

const settings = {timestampsInSnapshots: true};
db.settings(settings);

function updateHoursTransaction(transaction, userRef, amount) {
    return transaction.get(userRef)
    .then(function(userDoc) {
        if (!userDoc.exists) {
            throw "Document does not exist!";
        }

        var newHours = userDoc.data().hours + Number(amount);
        transaction.update(userRef, { hours: newHours });
    })
}

export const createUser = (id, name, email) => {
    return db.collection("users").doc(uid).set({
        id,
        name,
        email,
        hours: 0,
    })
}

export const getUsers = () =>
    db.collection("users").get()
    .then(function(querySnapshot) {
        var users = [];
        querySnapshot.forEach(doc => {
            var {hours, name} = doc.data();
            users.push({
                id: doc.id,
                name,
                hours,
            });
        });
        return users;
    });

export const getUser = id =>
    db.collection("users").doc(id).get()
    .then(doc => {
        if (doc.exists) return doc.data();
        else return null;
    });

export const sendHoursToUser = (id, amount) => {
    const userRef = db.collection("users").doc(id);
    // db.runTransaction(transaction => transaction.get(userRef))
    // .then(function(userDoc) {
    //     console.log("potato")
    //     if (!userDoc.exists) {
    //         throw "Document does not exist!";
    //     }

    //     var newHours = userDoc.data().hours + Number(amount);
    //     // transaction.update(userRef, { hours: newHours });
    // })
    db.runTransaction(transaction => updateHoursTransaction(transaction, userRef, amount))
    .then(function() {
        console.log("Transaction successfully committed!");
    })
    .catch(function(error) {
        console.log("Transaction failed: ", error);
    })
};

