# Name-the-site: A demonstration of local storage

### How to run and use

1. Clone this repo and run http server. The page will say 
   "Welcome to... Give me a name!"


2. Give the site a name and click the "Name it!" button.
   
   >The value entered is now saved in local storage as an item called "userInput".
   >If you open dev tools and navigate to "resources" or "application", in local storage you will find userInput with the value entered.
   
   The site will now say, "Welcome to... [your given name]" 
   
   
3. Refresh the page. The site will still say, "Welcome to... [your given name]"


4. Close the page and reopen. The site will **still** say, "Welcome to... [your given name]"


5. Click the reset button to change the site name back to "Give me a name!"
    > This removes the item 'userInput' from local storage. The name previously given is now gone... *forever.*
    
    
   


