export default {
    name: 'user',
    title: 'User',  
    type: 'document',
    fields: [    
        {
          name: 'username',      
          title: 'Username',      
          type: 'string', 
          validation: Rule => Rule.required(),     
        },    
        {
          name: 'pfp',
          title: 'Pfp',
          type: 'string',
        },
        {
          name: 'password',
          title: 'Password',
          type: 'string',
        },
        {
          name: 'email', 
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email(), 
        },
    ],
}