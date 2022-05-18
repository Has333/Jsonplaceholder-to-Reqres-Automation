function transformUsersDataFormatToReqres(users) {
  for (let user of users) {
    const reqresUserModel = {
      name: user.name + " (" + user.username + ")",
      job: user.company.name,
    };

    console.log(reqresUserModel);
  }
}

export { transformUsersDataFormatToReqres };
