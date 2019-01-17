require 'rails_helper'

describe 'api/v1/to_do_items/index', :type => :view do

  let(:to_do_item) { create :to_do_item }

  before :each do
    assign :to_do_items, [to_do_item]
    render
    @to_do_items = JSON.parse(rendered)
  end

  it 'includes the id' do
    expect(@to_do_items[0]['id']).to eq(to_do_item.id)
  end

  it 'includes the title' do
    expect(@to_do_items[0]['title']).to eq(to_do_item.title)
  end

  it 'includes the priority' do
    expect(@to_do_items[0]['priority']).to eq(to_do_item.priority)
  end

  it 'includes the complete_flag' do
    expect(@to_do_items[0]['complete_flag']).to eq(to_do_item.complete_flag)
  end
end
