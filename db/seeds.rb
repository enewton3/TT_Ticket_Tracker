# Destroy! -----------------------

User.destroy_all

user_list = [
  {
    username: 'jeri',
    email: 'diltsjeri@email.com',
    password: 'password',
  }
]

User.create!(user_list)

# Create Tickets! -----------------------

ticket_list = [
  {
    title: 'testing 1',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: true,
    user: User.first,
  },
  {
    title: 'testing 2',
    description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make',
    status: false,
    user: User.first,
  }
]

Ticket.create!(ticket_list)
