# Destroy! -----------------------

User.destroy_all










# Create Users! -----------------------

@admin = User.create!(username: 'admin', email: 'admin@gmail.com', password_digest: 'password')

user_list = [
  {
    username: "princess",
    email: "princess@gmail.com",
    password_digest: "password",
  },
  {
    username: "guapo",
    email: "guapo@gmail.com",
    password_digest: "password",
  }
]

User.create(user_list)

## log
puts "#{User.count} users created"