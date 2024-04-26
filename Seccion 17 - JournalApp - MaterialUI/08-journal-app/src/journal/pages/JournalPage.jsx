import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, praesentium exercitationem perferendis laudantium error fuga illo rem quasi consequatur ratione harum atque nobis vero, quod eius aliquam, amet asperiores delectus?</Typography> */}
            <NothingSelectedView />

            {/* NoteView */}
        </JournalLayout>
    );
};