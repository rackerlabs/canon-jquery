describe('canon-jquery', function () {
  it('creates canon namespace on window', function () {
    expect(window.canon).not.toBeNull();
  });
});
