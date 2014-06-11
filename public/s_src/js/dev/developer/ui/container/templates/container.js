// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
goog.provide('dev.developer.ui.container.templates.Container');

goog.require('ojster.Template');

/**
 * @param {Object=} opt_data
 * @param {Object=} opt_ctx
 * @param {ojster.StringWriter=} opt_writer
 * @constructor
 * @extends {ojster.Template}
 */
dev.developer.ui.container.templates.Container = function (opt_data, opt_ctx, opt_writer) {
  dev.developer.ui.container.templates.Container.base(this, 'constructor', opt_data, opt_ctx, opt_writer);
};
goog.inherits(dev.developer.ui.container.templates.Container, ojster.Template);


dev.developer.ui.container.templates.Container.prototype.renderBlockMain = function () { // @7:1
  var self = this;
  var d = this.data, vars = this.vars;
  self.writer.write(
    '<div class="',
    self.baseCssName, // @8:13
    '"><div class="',
    goog.getCssName(/** @type {string} */ (self.baseCssName), 'back'), // @9:15
    '"></div><div class="',
    goog.getCssName(/** @type {string} */ (self.baseCssName), 'content'), // @10:15
    '"></div><ins class="',
    goog.getCssName(/** @type {string} */ (self.baseCssName), 'resize'), // @11:15
    '"><ins class="',
    goog.getCssName(/** @type {string} */ (self.baseCssName), 'resize-icon'), // @12:17
    '"></ins></ins></div>'
  );
}; // @15:1
