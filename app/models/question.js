import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  subject: DS.attr(),
  inquiry: DS.attr(),
  body: DS.attr()
});
