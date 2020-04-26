# 26/07/2018

* Create Token.js file in firebase folder
  * created skeleton functions for token events

# 27/07/2018

* Link TimeLoggingForm to token request
* Create admin page for approving & rejecting requests
* Send tokens to other user using new function

* reverse feeds in admin section
* make submit button green instead red
* make sure we're checking for negative amounts everywere
* drop spend functionality in send section

* User able to view status and history of their requests
* implementing organisation administration
  * Implement organisation-specific request management
  * implement ability to add services (for spending tokens)
    * should vendors (or surplus providers) be separate entities to volunteer organisations?
      * discuss with group

* decide how token event feeds will be displayed
  - Displaying items from event-log, rendered based on event type
  * Need to clean up transactionfeed.js so naming conventions are more consistent

# 29/07/2018

- There was error in event log, had to manually delete entry in DB
  * Fixed event log function
* Renamed all vars in eventfeed to make it consistent
* Add app-wide offline indicator/dimmer

* Check date validation on TimeLoggingForm
* User can add description when sending hours

* Manage Users (especially user roles) in Admin page
  - Having info on user fits with current route auth

* research other methods of route authorisation

* persistent state for navigation?
- offline firebase: are offline transactions possible?

# 30/07/2018

- Methods of protecting routes
  - Store currentuser in local storage, check localstorage when app first loads
    and have app call onAuthStateChanged to refresh localstorage
  - Use `PrivateRoute` component, have it check if authenticated and either load
    load protected route or redirect
    - Need to have a way of having other authconditions like `role`
    - Can have some kind of loading functionality that waits for onAuthStateChanged
  - Using higher order component
    - Can add loading/pending to HOC
      * with loading component can refresh protected route without being redirected

## Styling:
* Make signup button green and put it on the right
* Make navigation menu more mobile friendly
* Make feed have 100% width on mobile (general responsive features??)

* test db and production db

* User can upload image
* Work on info modal

## Infomodal:
* Change image for second infopane with updated image
* Move heading in info pane to left (over text) and make bigger

# 26/04/2020

- Added meals provided field to log impact form
- Added user profile edit page
- Added user profile image upload
- Added log impact image upload field
- Added organisation edit page in admin
- Added organisation image upload field
- General code clean up, reducing duplication of code
- Added disclaimer to home page about data shown
- Added about page
