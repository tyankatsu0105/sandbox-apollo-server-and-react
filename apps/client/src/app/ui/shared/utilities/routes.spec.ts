import * as Routes from './routes';

describe('Routes', () => {
  describe('replaceParams', () => {
    it('paramsにあたる:<string>を、valueの値に置換した文字列を返す', () => {
      const uri = '/user/:userID/information/edit';

      const result = Routes.replaceParams(uri, {
        userID: '3081A31D-0FBF-419E-BBA3-39E85342F201',
      });

      expect(result).toBe(
        '/user/3081A31D-0FBF-419E-BBA3-39E85342F201/information/edit'
      );
    });
  });
});
