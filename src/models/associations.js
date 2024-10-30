const {PersonRegister} = require('./personRegister.js');
const {Address} = require('./address.js');
const {Contact} = require('./contact.js');
const {Role} = require('./role.js');

const defineAssociations = () => {
    PersonRegister.hasMany(Address, {
        foreignKey: 'personregisterid',
        sourceKey: 'id',
    });
    PersonRegister.hasMany(Contact, {
        foreignKey: 'personregisterid',
        sourceKey: 'id',
    });
    PersonRegister.hasMany(Role, {
        foreignKey: 'personregisterid',
        sourceKey: 'id',
    });

    Address.belongsTo(PersonRegister, {
        foreignKey: 'personregisterid',
        targetKey: 'id',
    });

    Contact.belongsTo(PersonRegister, {
        foreignKey: 'personregisterid',
        targetKey: 'id',
    });

    Role.belongsTo(PersonRegister, {
        foreignKey: 'personregisterid',
        targetKey: 'id',
    });
};
defineAssociations();

module.exports = defineAssociations;