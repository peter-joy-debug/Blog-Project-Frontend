import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './TestmonyTopCard.module.css';

export function TestmonyTopCard() {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          nature
        </Text>
        <Title order={3} className={classes.title}>
          Best forests to visit in North America <br/>
          <Button variant="white" color="dark" style={{marginTop:'15px',marginBottom:'15px'}}>
            Read article
        </Button>
        </Title>
      </div>

    </Paper>
  );
}