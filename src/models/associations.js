import PersonRegister from './personRegister.js';
import Address from "./adress.js";
import Contact from './contact.js';
import Role from './role.js';

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

export default defineAssociations;
