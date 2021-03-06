import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import SimpleSchema from 'simpl-schema'

import Gender from '../../framework/Constants/Gender'
import Pioneer from '../../framework/Constants/Pioneer'
import Privilege from '../../framework/Constants/Privilege'
import SystemLanguages from '../../framework/Constants/SystemLanguages'

const PersistenceManager = require('../../framework/Managers/PersistenceManager')

let Users = Meteor.users

Users.deny({
  insert () { return true },
  update () { return true },
  remove () { return true }
})

Users.schema = new SimpleSchema({
  _id: {
    type: String,
    autoValue () {
      if (!this.isSet) {
        return Random.id()
      }
    }
  },
  createdAt: {
    type: Date,
    autoValue () {
      if (!this.isSet) {
        return new Date()
      }
    }
  },
  createdBy: {
    type: String,
    autoValue () {
      if (!this.isSet) {
        return Meteor.userId()
      }
    }
  },
  lastChangeBy: {
    type: String,
    autoValue () {
      return Meteor.userId()
    }
  },
  username: {
    type: String,
    autoValue () {
      if (this.isSet && typeof this.value === 'string') {
        return this.value.toLowerCase().replace(/[^a-z0-9 äöü_-]+/g, '')
      }
      return Random.hexString(10)
    }
  },
  status: {
    type: Object,
    blackbox: true,
    optional: true
  },
  profile: {
    type: Object
  },
  'profile.firstname': {
    type: String
  },
  'profile.lastname': {
    type: String
  },
  'profile.email': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'profile.gender': {
    type: String,
    defaultValue: 'm',
    allowedValues: Gender.allowedValues
  },
  'profile.language': {
    type: String,
    autoValue () {
      if (this.isSet && typeof this.value === 'string' &&
          SystemLanguages.allowedValues.includes(this.value)) {
        return this.value
      } else {
        return SystemLanguages.defaultValue
      }
    }
  },
  'profile.languages': {
    type: String,
    optional: true
  },
  'profile.pioneer': {
    type: String,
    defaultValue: 'publisher',
    allowedValues: Pioneer.allowedValues
  },
  'profile.privilege': {
    type: String,
    defaultValue: 'publisher',
    allowedValues: Privilege.allowedValues
  },
  'profile.telefon': {
    type: String,
    optional: true
  },
  'profile.congregation': {
    type: String,
    optional: true
  },
  'profile.available': {
    type: Object,
    optional: true
  },
  'profile.available.mo': {
    type: Array,
    optional: true
  },
  'profile.available.mo.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.available.tu': {
    type: Array,
    optional: true
  },
  'profile.available.tu.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.available.we': {
    type: Array,
    optional: true
  },
  'profile.available.we.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.available.th': {
    type: Array,
    optional: true
  },
  'profile.available.th.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.available.fr': {
    type: Array,
    optional: true
  },
  'profile.available.fr.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.available.sa': {
    type: Array,
    optional: true
  },
  'profile.available.sa.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.available.su': {
    type: Array,
    optional: true
  },
  'profile.available.su.$': {
    type: Number,
    min: 0,
    max: 2300
  },
  'profile.vacations': {
    type: Array,
    defaultValue: []
  },
  'profile.vacations.$': new SimpleSchema({
    _id: {
      type: String,
      autoValue () {
        if (!this.isSet) {
          return Random.id()
        }
      }
    },
    createdAt: {
      type: Date,
      autoValue () {
        if (!this.isSet) {
          return new Date()
        }
      }
    },
    createdBy: {
      type: String,
      autoValue () {
        if (!this.isSet) {
          return Meteor.userId()
        }
      }
    },
    start: {
      type: Number,
      min: 2000000
    },
    end: {
      type: Number,
      min: 2000000
    }
  }),
  'profile.shortTermCalls': {
    type: Boolean,
    defaultValue: false
  },
  'profile.shortTermCallsAlways': {
    type: Boolean,
    defaultValue: false
  },
  state: {
    type: String,
    defaultValue: 'created'
  },
  services: {
    type: Object,
    blackbox: true,
    optional: true
  },
  roles: {
    type: Object,
    blackbox: true,
    optional: true
  }
})

Users.uniqueKeys = ['username']

Users.attachSchema = Users.schema

Users.persistence = new PersistenceManager(Users)

export default Users
