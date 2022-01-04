const users =[
    {username:'test', password:'test', email:'test@test.com', user_first_name:'test', user_last_name:'test'},
]
const workspaces =[
    {workspace_name:'SF Sleek Office', workspace_description:'A one of a kind office that allows employees to feel relaxed in suburban life and get excited to go to work. Property includes free coffee, parking, blazing fast wi-fi and deep cleaning before and after every visit.', workspace_location:'San Francisco', workspace_price:50},
    {workspace_name:'The View', workspace_description:'Sit atop a skyscraper and take in all of beautiful LA.', workspace_location:'Los Angeles', workspace_price:35},
    {workspace_name:'Relaxing WorkSpace', workspace_description:'This homie office is great for meetings, group projects, or co-working space. It has the feel of a coffee shop but the privacy of a tech office.', workspace_location:'Oakland', workspace_price:45},
    {workspace_name:'Industrial Co-Working Space', workspace_description:'High ceilings, raw materials, metal and glass. You will work like a champ and feel powerful in this sleek beautifully crafted WorkSpace.', workspace_location:'Berkley', workspace_price:75},
    {workspace_name:'SF Comfort', workspace_description:'A sleek and clean WorkSpace with all the accommodations. Comfortable seating, beautiful scenery, and sleek architecture. Free drip coffee 24/7. ', workspace_location:'San Francisco', workspace_price:80},
    {workspace_name:'New York Sky Scraper', workspace_description:'One of WorkSpaces largest coworking stations. One of the sleekest places to be and very affordable.', workspace_location:'New York', workspace_price:22},
    {workspace_name:'Executive Office Suite', workspace_description:'A sleek and clean WorkSpace with all the accommodations. Comfortable seating, beautiful scenery, and sleek architecture. Free drip coffee 24/7. ', workspace_location:'San Francisco', workspace_price:60},
    {workspace_name:'Co-Work Elite', workspace_description:'One of WorkSpaces largest co-working stations. One of the sleekest places to be and very affordable.', workspace_location:'San Francisco', workspace_price:40}, 
]
const capacity =[
    {capacity_number:'1'},
    {capacity_number:'2'},
    {capacity_number:'3-6'},
    {capacity_number:'7-20'},
    {capacity_number:'20+'},
]
const types=[
    {type_name:'Home Office'},
    {type_name:'Shared Office'},
    {type_name:'Unique WorkSpaces'},
    {type_name:'Entire Office'},   
]

const images=[
    {image_content:'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',workspace_id:1},
    {image_content:'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',workspace_id:2},
    {image_content:'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',workspace_id:3},
    {image_content:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',workspace_id:4},
    {image_content:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',workspace_id:5},
    {image_content:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',workspace_id:6},
    {image_content:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',workspace_id:7},
    {image_content:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',workspace_id:8},
]

const workspace_capacity=[
    {workspace_id:1,capacity_id:4},
    {workspace_id:2,capacity_id:4},
    {workspace_id:3,capacity_id:3},
    {workspace_id:4,capacity_id:4},
    {workspace_id:5,capacity_id:3},
    {workspace_id:6,capacity_id:5},
    {workspace_id:7,capacity_id:3},
    {workspace_id:8,capacity_id:5},
]

const workspace_type=[
    {workspace_id:1,type_id:2},
    {workspace_id:2,type_id:2},
    {workspace_id:3,type_id:4},
    {workspace_id:4,type_id:2},
    {workspace_id:5,type_id:3},
    {workspace_id:6,type_id:2},
    {workspace_id:7,type_id:2},
    {workspace_id:8,type_id:3},
]

exports.seed = async function(knex) {
 await knex('users').insert(users)
 await knex('workspaces').insert(workspaces)
 await knex('capacity').insert(capacity)
 await knex('types').insert(types)
 await knex('images').insert(images)
 await knex('workspace_capacity').insert(workspace_capacity)
 await knex('workspace_type').insert(workspace_type)
};