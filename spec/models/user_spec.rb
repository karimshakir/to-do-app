require 'rails_helper'

describe User, :type => :model do
  describe "#rememberable_value!" do
    it "does not replace the stored token" do
      user = create :user, remember_token: 'preset auth'
      expect(Devise).to receive(:friendly_token).never
      expect(user.rememberable_value).to eq('preset auth')
    end

    it "has Devise generate a new friendly token if not present" do
      user = create :user
      user.update_attribute(:remember_token, nil)
      expect(Devise).to receive(:friendly_token) { 'abc123' }
      expect(user.rememberable_value).to eq('abc123')
    end
  end
end
