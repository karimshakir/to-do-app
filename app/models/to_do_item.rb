# == Schema Information
#
# Table name: to_do_items
#
#  id            :bigint(8)        not null, primary key
#  title         :string
#  description   :string
#  priority      :integer
#  complete_flag :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ToDoItem < ApplicationRecord
end
