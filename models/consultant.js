var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ConsultantSchema = new Schema({
    createdAt           : { type: Date }
  , updatedAt           : { type: Date }

  , firstName           : { type: String, required: true }
  , lastName            : { type: String, required: true }
  , email               : { type: String, required: true }
  , title               : { type: String, required: true }
  , bio                 : { type: String, required: true }
  , linkedIn            : { type: String }
  , github              : { type: String, required: true }
  , website             : { type: String }
  , photoURL            : { type: String, required: true }

})

ConsultantSchema.pre('save', function(next){
  // SET createdAt AND updatedAt
  var now = new Date()
  this.updatedAt = now
  if ( !this.createdAt ) {
    this.createdAt = now
  }
  next()
})

module.exports = mongoose.model('Consultant', ConsultantSchema);
