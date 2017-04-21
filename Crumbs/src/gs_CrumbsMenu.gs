function createMenuForMe(ui, cmds) {

  var menu = ui.createMenu('Crumbs');

  _.forEach(cmds, function (cmd) {
    this.addItem(cmd, cmd);
  }.bind(menu));

  return menu;

}