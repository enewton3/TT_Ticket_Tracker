class FixTicketTable < ActiveRecord::Migration[6.1]
  def change
    rename_column :messages, :tickets_id, :ticket_id
  end
end
