import {Button, ButtonGroup, Image, Row, ToggleButton} from "react-bootstrap";
import {useState} from "react";

type DesignGoalProps = {
    image: any,
    description: string
}

const goalImageStyle = {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: '600px'
}

const rowStyle = {
    justifyContent: 'center' as const,
    margin: 10
}

const clearButtonStyle = {
    maxWidth: '50%' as const,
}

export default function DesignGoal(props: DesignGoalProps) {
    const [achievementValue, setAchievement] = useState('0')

    const achievements = [
        {name: 'Colour OR Pattern', testId: 'either-or-button', value: '1'},
        {name: 'Colour AND Pattern', testId: 'both-button', value: '2'}
    ]

    return (
        <>
            <Row style={rowStyle}>
                <Image src={props.image}
                       alt={props.description}
                       data-testid={'goal-image'}
                       style={goalImageStyle}
                       fluid/>
            </Row>
            <Row style={rowStyle}>
                <ButtonGroup aria-label={'Achievement'}>
                    {achievements.map((achievement, idx) => (
                        <ToggleButton key={`achievement-${idx}`}
                                      id={`achievement-${idx}`}
                                      type={'radio'}
                                      data-testid={achievement.testId}
                                      value={achievement.value}
                                      checked={achievementValue === achievement.value}
                                      onChange={(e) =>
                                          setAchievement(e.currentTarget.value)
                                      }
                                      variant={'outline-primary'}>
                            {achievement.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Row>
            <Row style={rowStyle}>
                <Button variant={'light, outline-light'}
                        onClick={() => setAchievement('0')}
                        style={clearButtonStyle}>
                    Clear
                </Button>
            </Row>
        </>
    )
}