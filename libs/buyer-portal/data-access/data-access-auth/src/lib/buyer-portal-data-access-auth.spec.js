import { buyerPortalDataAccessAuth } from './buyer-portal-data-access-auth';
describe('buyerPortalDataAccessAuth', () => {
  it('should work', () => {
    expect(buyerPortalDataAccessAuth()).toEqual(
      'buyer-portal-data-access-auth'
    );
  });
});
