module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define("contacts");
  Contacts.init({
      id: {
          type: DataTypes.UUIDV4(36),
          defaultValue: DataTypes.UUIDV4(),
          autoIncrement: true,
          primaryKey: true,
          field: 'id'
      },
      full_name: {
          type: DataTypes.STRING,
          field: 'full_name'
      },
      email: {
          type: DataTypes.STRING,
          field: 'email'
      },
      project_type: {
          type: DataTypes.STRING,
          field: 'project_type'
      },
      mobile: {
          type: DataTypes.STRING,
          field: 'mobile'
      },
      message: {
          type: DataTypes.STRING,
          field: 'message'
      },
      created_time: {
          type: DataTypes.TIME,
          field: 'created_time'
      },
      created_by: {
          type: DataTypes.STRING,
          field: 'created_by'
      },
      updated_time: {
          type: DataTypes.TIME,
          field: 'updated_time'
      },
      updated_by: {
          type: DataTypes.STRING,
          field: 'updated_by'
      },
      createdAt: {
          type: DataTypes.STRING,
          field: 'created_at'
      },
      updatedAt: {
          type: DataTypes.STRING,
          field: 'updated_at'
      },
  }, {sequelize, freezeTableName: true});

  return Contacts;
};
