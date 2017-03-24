import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord("question", params.question_id);
  },
  actions: {
    deleteQuestion(question){
      if(confirm("Are you sure you want to delete this question? Leaving it may help someone else find and answer in the future.")){
        question.destroyRecord();
        this.transitionTo("index");
      }
    },
    updateQuestion(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
  }
});