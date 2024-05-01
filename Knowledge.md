# init
Start learn
# e05 router
Every folder and file of pages directory is a router
Config query string by use _ before folder name

# e06 nuxt link
Use nuxt-link to redirect page

# e07 validate params

# e08 child component
User next-child to nest a child component to a big componet with a same name (name file.vue and the child is in folder file)

# e09 layout
Config layout in export default, just specify the name file layout in folder layouts

# e10 error page 
Just create an error file in layouts folder

# e11 12 13 14 global style, custom font
change in nuxt.config.js

# e15-16 update design 

# e19 20 - plugin, modal

# e23 24 25 - asyncData()
- The asyncData() use to put html to dom after a promise is done 
- If you use data() the html  will not in the dom what is not good for SEO
- It runs on server 
- Context in asyncData is useful, can rea router...
- Use promise
# e27 vuex
# e28 fetch + nuxtServerInit
- fetch use like asyncData() but it is not set data to this page. You must use store in Vuex coop vs computed to set data
- nuxtServerInit: this function run when server is start. It uses to set data to vueStore and only use in action of store/index.js
# e29-30 use fire base + create deck
# e31 + 32 get a deck and get list deck
# e33 update a deck
Logic: Use modal in default - default has DeckForm - DeckForm emit onSubmit to Default 
# e34 Update logic 
Action in vuex can run async but mutation is not.
You should call API in action, and interact with html in page

# e35 header
- Config title of a page by head:{}
