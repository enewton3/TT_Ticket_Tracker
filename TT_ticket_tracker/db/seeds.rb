# Destroy! -----------------------

Ticket.destroy_all
User.destroy_all




# Create Users! -----------------------

user_list = [
  {
    username: 'jeri',
    email: 'diltsjeri@email.com',
    password: 'password',
  },
  {
    username: 'guapo',
    email: 'guapo@email.com',
    password: 'password',
  }
]

User.create!(user_list)





# Create Tickets! -----------------------

ticket_list = [
  {
    title: 'testing 1 - Why is this not working?',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: true,
    user: User.first,
  },
  {
    title: 'testing 2 - Flexbox ahhhhhhh makes no sense',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: false,
    user: User.second,
  },
  {
    title: 'testing 3 - I just want to get Full CRUD!',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: false,
    user: User.first,
  },
  {
    title: 'testing 4 - This issue is so difficult.',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: false,
    user: User.second,
  },
  {
    title: 'My brain is melting. Send help!',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: false,
    user: User.first,
  },
]

Ticket.create!(ticket_list)
