import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import project1 from "../../assets/projects/project1.jpg";
import project2 from "../../assets/projects/project2.jpg";
import project3 from "../../assets/projects/project3.jpg";
import project4 from "../../assets/projects/project4.jpg";
import project5 from "../../assets/projects/project5.jpg";
import project6 from "../../assets/projects/project6.jpg";
import project7 from "../../assets/projects/project7.jpg";
import project8 from "../../assets/projects/project8.jpg";
import project9 from "../../assets/projects/project9.jpg";

export default function Projects() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
        gap: "1rem",
        placeItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Supertalent
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Second-ever dance performance on the stages of the Supertalent
              Show resulted in success, with the judges' acknowledgment serving
              as the wind at one's back.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Erasmus+
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unforgettable journey with the Erasmus+ Programme located in
              Montecatini Terme, Italy, where joy and optimism filled the air
              alongside dance and socialization.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project3}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Talk Show
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A talk show appearance on the Hayat TV network, where the host and
              the audience were left in awe by the performance and the story
              behind the dance.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project4}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Championship
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A dance competition in the city of Sarajevo, where the performance
              of the dance group was met with a standing ovation and the
              first-place trophy.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project5}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bosniak Institute
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A performance at the Bosniak Institute in Sarajevo, where the art
              of dance was presented to the audience in a unique and
              unforgettable way.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project6}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bolero Dance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A dance performance at the Bolero Dance Festival in Sarajevo,
              where the atmposphere was constantly filled with beauty and
              elegance of the dance.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project7}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Avon Show
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A dance performance at the Avon Show in Sarajevo, where the
              audience was captivated by the mesmerizing choreography and the
              seamless synchronization of the dancers.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project8}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mercedes Event
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A mesmerizing dance performance at the Mercedes-Benz Starline
              Event, where elegance and innovation collided on the dance floor,
              showcasing the beauty of the well-know brand.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project9}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SSC
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An indescribable experience of working and sharing the stage with
              world-class professionals ranging from Cuba, Mexico, Italy, and
              beyond at the Sarajevo Salsa Congress.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
