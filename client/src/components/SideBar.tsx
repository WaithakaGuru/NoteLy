import { Card, CardMedia, Typography, Stack, Button} from "@mui/material";
import useNote from "../store/notelyStore";

function SideBar() {
  const {path}= useNote();
  console.log(path);

  return (
    <Stack
      component={"aside"}
      className="max-w-42 fixed top-20 h-full w-64 overflow-hidden ml-[-1.2rem]"
      sx={{ zIndex: { xs: -1, sm: 1 } }}
    >
      <Card
        className="rounded-2xl bg-transparent p-6"
        elevation={0}
        sx={{ bgcolor: "transparent" }}
      >
        <CardMedia
          component={"img"}
          image="/me.png"
          alt="DP"
          className="h-20 max-w-20 rounded-2xl"
        />
        <Typography
          variant="subtitle1"
          fontWeight={"bold"}
          className="text-gray-50 my-0 py-0"
        >
          Waithaka
        </Typography>
        <Typography
          variant="subtitle2"
          className="text-gray-50 py-0 font-bold"
          fontSize={".6rem"}
        >
          waithakaoffices@gmail.com
        </Typography>
        {(path !== "/dashboard/create" && path !== "/dashboard/update" && path !== "/dashboard/profile")?  (
        <>
        <Button href={"/dashboard"} className="p-0" sx={{my:".5rem"}} variant="outlined">
        <Typography
          className="text-gray-50 text-nowrap"
          fontWeight={"bold"}
          textTransform={"none"}
          sx={{ml: "-.9rem"}}
        >
          Pinned Notes
        </Typography>
        </Button>
        <Button href={"/dashboard"} variant="outlined">
          <Typography
            className="text-gray-50 text-nowrap"
            fontWeight={"bold"}
            textTransform={"none"}
            sx={{ml: "-.9rem"}}
          >
            Public Notes
          </Typography>
        </Button>
      </>) : "" }
      </Card>
      <Stack component={"div"} className="justify-center gap-4 p-6">
        <a href="/dashboard">
          <Typography fontWeight={"bold"}
            sx={{color: path==="/dashboard"? "#f9fafb" : "#99a1af"}}
          >
            Dashboard
          </Typography>
        </a>
       < a href="/dashboard/create">
          <Typography fontWeight={"bold"}
            sx={{color: path==="/dashboard/create"? "#f9fafb" : "#99a1af"}}
          >
            New Note
          </Typography>
        </a>
        <a href="/dashboard/note">
          <Typography fontWeight={"bold"}
            sx={{color: path==="/dashboard/note"? "#f9fafb" : "#99a1af"}}
          >
            My notes
          </Typography>
        </a>
        <a href="/dashboard/trash">
          <Typography fontWeight={"bold"}
            sx={{color: path==="/dashboard/trash"? "#f9fafb" : "#99a1af"}}
          >
            Trash Notes
          </Typography>
        </a>
        <a href="/dashboard/profile">
          <Typography fontWeight={"bold"}
            sx={{color: path==="/dashboard/profile"? "#f9fafb" : "#99a1af"}}
          >
            Profile
          </Typography>
        </a>
      </Stack>
    </Stack>
  );
}

export default SideBar;
