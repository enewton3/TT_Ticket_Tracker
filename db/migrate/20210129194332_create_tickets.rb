class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :title
      t.string :description
      t.boolean :status

      t.timestamps
    end
  end
end
