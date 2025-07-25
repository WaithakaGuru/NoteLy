import getUploadInfo from "./generateCloudinaryUploadInfo.controller.ts";
import createNote from "./createNote.controller.ts";
import getAllNotes from "./getAllUserNotes.controller.ts";
import getUserNotes from "./getAllUserNotes.controller.ts";
import getSpecificNote from "./getSpecificNote.controller.ts";
import deleteNote from "./deleteNote.controller.ts";
import updateNote from "./updateNote.contoller.ts";
import getTrashNotes from "./getAllTrashNotes.controller.ts";
import restoreDeletedNote from "./restoreDeletedNote.controller.ts";
import registerNewUser from "./registerNewUser.controller.ts";
import createJWebToken from "./loginUser.controller.ts";
import updateUserInfo from "./updateUserInfo.controller.ts";
import updatePassword from "./updateUserPassword.controller.ts";
import logoutUser from "./logoutUser.controller.ts";

export {
  getUploadInfo,
  createNote,
  getAllNotes,
  getUserNotes,
  getSpecificNote,
  deleteNote,
  updateNote,
  getTrashNotes,
  restoreDeletedNote,
  registerNewUser,
  createJWebToken,
  updateUserInfo,
  updatePassword,
  logoutUser,
};
