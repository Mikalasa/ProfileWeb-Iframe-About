import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {experienceConfig} from "../../experience-config";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';


function TimeLine() {
  return (
    <>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--box"
                date="2023 - Present"
                iconStyle={{background: 'rgb(72,79,84)', color: '#fff'}}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-2xl"><strong>Master of Software Development</strong>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">New Zealand</h4>
                <p>
                    {experienceConfig.experience[0].description}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--box"
                date="2022"
                iconStyle={{background: 'rgb(250,250,250)', color: 'rgb(0,0,0)'}}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title text-2xl"><strong>Front-end Developer</strong></h3>
                <h4 className="vertical-timeline-element-subtitle">Shanghai, China</h4>
                <p>
                    {experienceConfig.experience[1].description}
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--box"
                date="2018 - 2021"
                iconStyle={{background: 'rgb(72,79,84)', color: '#fff'}}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title text-2xl"><strong>Bachelor of Creativity</strong></h3>
                <h4 className="vertical-timeline-element-subtitle">New Zealand</h4>
                <p>
                    {experienceConfig.experience[2].description}
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </>
  );
}

export default TimeLine;