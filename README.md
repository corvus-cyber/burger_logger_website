# burger_logger_website

# Description 
This assignment takes mySQL, javascript, express, and express-handlers and taught me how to build a web-based application that would take the database from sql and allow the user to view the content, add content, and update parts of the sql. 

Upon going to the website the user will be able to see a list of burgers waiting to be devoured. The user can then add to that list by typing a burger of their choice and then submitting it, or press the "devour it" button to have the clicked on burger move from waiting list to a different list only for those burgers waiting to be devoured. 

I built this project in order to test my newfound knowledge of SQL and apply it into creating a web based application that can access the database in question.


# Table of Contents
1. [Process](#Process)
2. [Issues](#Issues)
3. [Mastered](#Mastered)
4. [Improvements](#Improvements)
5. [Link](#Link)
6. [Screenshot](#Screenshot)

# Process:
* To begin, I built a schema and seeds.sql that would contain the burger_name, id, and whether the burger had been devoured. I then built the connection.js, which would check for the database within mySQL workbench. 
* I then built an orm, which would take the connection.js, which contains all of the necesscary connection.queries that would be able to select data from the database, insert new data, or update said data. 
* After exporting the orm.js to burgers.js which then allowed us to present a callback of the results, I exported said functions to burger-controller.js, which held router.post, router.put, and router.push, which would take the different functions, and then configure the data so that it could be presented in the interface. 
* Instead of using html, I used express-handlebars which allowed me to build a clean front-end display that would show the database that would take the information found in the database and display it in the desired manner. 
* Finally I used the boiler plate to build a server.js that would present everything on a live-server. In order for this to work I needed to add the required middle-ware that will listen to the express-handlebars.

# Issues:
* One of the difficulties of this assignment was the number of seperate folders and files. While this made the final product more organized and  succinct, it allowed for typos to occur as I accidently misnamed an already defined variable in a new file, one such occurance was when I made the variable name for the table in the database "burger_name", but I tried to export the new burger the user created with the variable name of "name". 
* Another issue that occured was when I was trying to export the newly created burger to the database using script.js, it kept allowing the new burger to have a value of "null" in the "devoured" variable. As I needed it to be assigned as a zero, I had to manually declare the variable to be zero when initially created.
* The formatting with the express handlebars led to some interesting complications. Initially the "devour it" button was being displayed beneath the data, which was not how I wanted it to be shown. In order to fix this I needed to place a row within the column, and make sure that the columns were inside of the {{#each}} and {{#unless}} brackets, otherwise it would not display properly. 

# Mastered:
* Deploying the database to an express server.
* Using orm to create more succinct and clean connection.queries that would only require to call it once for each each kind (select, insert, and update). 

# Improvements:
* Another node that we are just starting to learn about this week is sequelize, which takes a lot of what we were supposed to accomplish manually in this activity and handle it in a more "dry" manner. We were not supposed to use this method for this activity as we needed to learn how the database links to the server, but if I was to redo this activity using unit 14's knowledge I would try to accomplish it using sequelize. 

# Link:

# Screenshot: 
