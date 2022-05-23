function transformUserDataFormatToReqres(user) {
    const reqresUserModel = {
      name: user.name + " (" + user.username + ")",
      job: user.company.name,
    };

    return reqresUserModel
}

export { transformUserDataFormatToReqres };
