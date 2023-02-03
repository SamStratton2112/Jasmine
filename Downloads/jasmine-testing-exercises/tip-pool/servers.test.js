describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not except empty server name input', function(){
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  // it('should add new amount to total payment', function(){
  //   updateServerTable();
  //   sumPaymentTotal();
  //   expect(tipAverage.value).not.toEqual(0);
  //   //I don't really understand what I'm doing here...
  // })

  afterEach(function() {
    serverNameInput.value = '';
    allServers={};
  });
});

