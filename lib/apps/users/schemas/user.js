module.exports = {
  required: true
, type: 'object'
, properties: {
    email: { required: true, type: 'string' }
  , name: { type: 'string' }
  , handle: { type: 'string' }
  , password: { type: 'string' }
  , shouldChangePassword: { type: 'boolean' }
  , verificationCode: { type: [ 'string', 'null' ] }
  , photo: { type: 'string' }
  , gender: { type: 'string' }
  , token: { type: 'string' }
  , network: { 
      type: 'object' 
    , properties: {
        name: { type: 'string' }
      , link: { type: 'string' }
      , token: { type: 'string' }
      }
    }
  , networkId: { type: 'string' }
  , isLocked: { type: 'boolean' }
  , isArchived: { type: 'boolean' }
  , settings: { type: 'object' }
  , roles: { type: 'array' }
  , groupId: { type: 'string' }
  , securityKey: { 
      type: 'object'
    , properties: {
        low: { type: 'number' }
      , high: { type: 'number' }
      } 
    }
  }
};