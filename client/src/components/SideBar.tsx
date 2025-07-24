import { Card, CardMedia, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

function SideBar() {
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
         <Button href={"/dashboard"} className="p-0" sx={{my:".5rem"}} variant="outlined">
          <Typography
            className="text-gray-50 text-nowrap"
            fontWeight={"bold"}
            textTransform={"none"}
          >
            Pinned Notes
          </Typography>
        </Button>
        <Button href={"/dashboard"} variant="outlined">
          <Typography
            className="text-gray-50 text-nowrap"
            fontWeight={"bold"}
            textTransform={"none"}
          >
            Public Notes
          </Typography>
        </Button>
      </Card>
      <Stack component={"div"} className="justify-center gap-4 p-6">
        <Link to={"/dashboard"}>
          <Typography className="text-gray-50" fontWeight={"bold"}>
            Dashboard
          </Typography>
        </Link>
        <Link to={"/dashboard"}>
          <Typography className="text-gray-50" fontWeight={"bold"}>
            My notes
          </Typography>
        </Link>
        <Link to={"/trash"}>
          <Typography className="text-gray-50" fontWeight={"bold"}>
            Trash Notes
          </Typography>
        </Link>
        <Link to={"/profile"}>
          <Typography className="text-gray-50" fontWeight={"bold"}>
            Profile
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}

export default SideBar;
