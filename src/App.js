import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import {workExperience, projects, skills, education} from './data';

import './index.scss'


const S = {}


// GENERAL REUSABLE STYLED COMPONENTS
S.SpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
S.CondensedBulletList = styled.ul`
  margin: 0px;
`
S.HorizontalBulletList = styled(S.CondensedBulletList)`
  padding-left: 5px;

  li:first-child {
    list-style: none;
    padding-left: 0px;
  }
`
S.HorizontalBulletListElement = styled.li`
  float: left;
  padding: 0px 16px 0px 0px;

  > span {
    position: relative;
    left: -6px;
  }
`
S.SpacedBulletList = styled(S.CondensedBulletList)`
  > li {
    margin-bottom: 3.5px;
    margin-left: -21.5px;

    > span {
      position: relative;
      left: -2px;
    }
  }

  li:last-child {
    margin-bottom: 0px;
  }
`

const Contacts = () => {

  const Email = () => <span className='contact'><a href="mailto:yuangeorge9981@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> yuangeorge9981@gmail.com</a></span>
  const Github = () => <span className='contact'><a href="https://github.com//georgezhyuan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> georgezhyuan</a></span>
  const LinkedIn = () => <span className='contact'><a href="https://ca.linkedin.com/in/georgezhyuan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> in/georgezhyuan</a></span>

  return (
    <div>
       {/* <S.HorizontalBulletList>
         <S.HorizontalBulletListElement><Email /></S.HorizontalBulletListElement>
         <S.HorizontalBulletListElement><Github /></S.HorizontalBulletListElement>
         <S.HorizontalBulletListElement><LinkedIn /></S.HorizontalBulletListElement>
       </S.HorizontalBulletList> */}


         <span><Email /></span>
         <span className='contact-separator'>|</span>
         <span ><Github /></span>
         <span className='contact-separator'>|</span>
         <span><LinkedIn /></span>
    </div>
  );
}



// WORK EXPERIENCE
const WorkPosition = (props) => {
  return <div className='subsection-header'>
    <S.SpaceBetweenDiv> 
      <div>
         <div className='subsection-title'>{props.companyName}</div>
         <div className='work-location'>{props.role}</div>
      </div>
      <div className="subection-caption">
        <div>{props.address}</div>
        <div>{props.date} </div>
      </div>   
    </S.SpaceBetweenDiv>
  </div>
}

const WorkDetails = (props) => {
  return <div className='.subsection-content'>
    <S.SpacedBulletList>
      {props.details.map((detail, idx) => <li key={idx}><span>{detail}</span></li>)}
    </S.SpacedBulletList>
  </div>
}
const WorkExperiences = (props) => {
  return (
    <div>
      {props.workExp.map((item, idx) => {
        return (
          <div className='subsection' key={idx}>
            <WorkPosition 
              companyName={item.companyName}
              role={item.role}
              address={item.address}
              date={item.date}
            />
            <WorkDetails details={item.details} />
          </div>
        );
      })}
    </div>
  );
}


// PROJECTS
const ProjectTitle = (props) => {
  return <div className='subsection-header'>
    <S.SpaceBetweenDiv>
      <div className="subsection-title">{props.projectName} </div>
      <div className="subection-caption">
        {props.techStack.map((item, idx) => {
          return (
            <span key={idx}>
              {idx !== 0 &&<span>, </span>}
              <span>
                {item}
              </span>
            </span>
          );
        })}
      </div>
    </S.SpaceBetweenDiv>
    
  </div>
}
const ProjectDetails = (props) => {
  return (
    <div className='.subsection-content'>
      <S.SpacedBulletList>
        {props.details.map((detail, idx) => <li key={idx}><span>{detail}</span></li>)}
      </S.SpacedBulletList>  
    </div>
  );
}
const Projects = (props) => {
  return (
    <div>
      {props.projects.map((item, idx) => {
       return (
        <div className='subsection' key={idx}>
          <ProjectTitle
            projectName={item.projectName}
            techStack={item.techStack}
          />
          <ProjectDetails details={item.details} />
        </div>
       ); 
      })}
    </div>
  );
}


// SKILLS
const SkillList = (props) => {
  return (
    <div className='.subsection-content'>
      <S.HorizontalBulletList>
        {props.skillsetSkills.map((skill, idx) => <S.HorizontalBulletListElement key={idx}><span>{skill}</span></S.HorizontalBulletListElement>)}
      </S.HorizontalBulletList>
    </div>
  );
}

S.SkillSet = styled.div`
  display: flex;
  flex-direction: row;

  div:first-child {
    padding-right: 5px
  }
`
const SkillSet = (props) => {
  return (
    <S.SkillSet>
      <div><b>{props.skillSet.title}:</b></div>
      <SkillList skillsetSkills={props.skillSet.skills} />
    </S.SkillSet>
  );
}
const Skills = (props) => {
  return (
    <div className='subsection'>
      {props.skills.map((item, idx) => <SkillSet key={idx} skillSet={item} />)}
    </div>
  );
}


// EDUCATION
const Education = (props) => {

  return (
    <div className='subsection-header'>
      <div className='subsection-title'>{props.education.institution}</div>

      <S.SpaceBetweenDiv>
        <div>{props.education.degree}</div>
        <div>{props.education.gradDate}</div>
      </S.SpaceBetweenDiv>
    </div>
  );
}


const App = () => {
  return (
    <div className='resume'>
      <div className='header'>
        <div className='name'>George Yuan</div>
        <Contacts />
      </div>
      <div className='body'>
        <div className='section'>
          <div className='section-header'>SKILLS</div>
          <Skills skills={skills}/>
        </div>

        <div className='section'>
          <div className='section-header'>WORK EXPERIENCE</div>
          <WorkExperiences workExp={workExperience}/>
        </div>

        <div className='section'>
          <div className='section-header'>PROJECTS</div>
          <Projects projects={projects}/>
        </div>

        <div className='section'>
          <div className='section-header'>EDUCATION</div>
          <Education education={education} />
        </div>
      </div>
    </div>
  );
}

export default App;
