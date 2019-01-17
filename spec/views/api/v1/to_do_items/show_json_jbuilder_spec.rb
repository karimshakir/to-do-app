require 'rails_helper'

describe 'api/v1/to_do_items/show', :type => :view do

  let(:to_do_item) { create :to_do_item }

  before :each do
    assign :to_do_item, to_do_item
    render
    @to_do_item = JSON.parse(rendered)
  end

  it 'includes the id' do
    expect(@to_do_item['id']).to eq(to_do_item.id)
  end

  it 'includes the title' do
    expect(@to_do_item['title']).to eq(to_do_item.title)
  end

  it 'includes the description' do
    expect(@to_do_item['description']).to eq(to_do_item.description)
  end

  it 'includes the priority' do
    expect(@to_do_item['priority']).to eq(to_do_item.priority)
  end

  it 'includes the complete_flag' do
    expect(@to_do_item['complete_flag']).to eq(to_do_item.complete_flag)
  end
end
