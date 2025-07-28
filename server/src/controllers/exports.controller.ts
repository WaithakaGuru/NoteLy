import getUploadInfo from "./generateCloudinaryUploadInfo.controller";
import createNote from "./createNote.controller";
import getAllNotes from "./getAllNotes";
import getAllUserNotes from "./getAllUserNotes.controller";
import getUserInfo from "./getUserInfo";
import getSpecificNote from "./getSpecificNote.controller";
import deleteNote from "./deleteNote.controller";
import updateNote from "./updateNote.contoller";
import pinNote from "./pinNote.controller";
import getTrashNotes from "./getAllTrashNotes.controller";
import restoreDeletedNote from "./restoreDeletedNote.controller";
import registerNewUser from "./registerNewUser.controller";
import createJWebToken from "./loginUser.controller";
import updateUserInfo from "./updateUserInfo.controller";
import updatePassword from "./updateUserPassword.controller";
import logoutUser from "./logoutUser.controller";

export {
  getUploadInfo,
  createNote,
  getAllNotes,
  getAllUserNotes,
  getUserInfo,
  getSpecificNote,
  deleteNote,
  updateNote,
  pinNote,
  getTrashNotes,
  restoreDeletedNote,
  registerNewUser,
  createJWebToken,
  updateUserInfo,
  updatePassword,
  logoutUser,
};
