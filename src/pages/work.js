
import React, {useState, useEffect} from 'react'
import PageTemplate from "../components/pagetemplate"
import {projects} from '../data/projects'
import {StarIcon} from '../assets/staricon'

const Projects = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {

        async function getStars(){

            const repos = await fetch("https://api.github.com/users/ogoregen/repos?per_page=100")
            return repos.json()
        }
    
        getStars()
            .then((data) => {setRepos(data)})
            .catch((error) => console.log(error))
    }, [])

    return(
        <PageTemplate title="Projects">
            <div className="fly-grid fly-grid-2">
                {
                    projects.map((project) => {
                        return(
                            <div className="fly-card fly-flex fly-flex-column fly-flex-space-between">
                                <div>
                                    <div className="fly-flex fly-flex-space-between">
                                        <span className="fly-text-muted">{project.date}</span>
                                        <div className="fly-text-muted">
                                            {
                                                repos.find((repo) => repo.name === project.slug) && (
                                                    <a href={`https://github.com/ogoregen/${project.slug}/stargazers`} target="_blank" className="fly-flex fly-flex-middle fly-link-text">
                                                        <span className="fly-margin-xsmall-right">
                                                            {
                                                                Number(repos.find((repo) => repo.name === project.slug).stargazers_count).toLocaleString()
                                                            }
                                                        </span>
                                                        <StarIcon color="#eac54f"/>
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <h2 className="fly-margin-none fly-text-lead">{project.name}</h2>
                                    <p className="fly-margin-none-top">{project.description}</p>
                                </div>
                                <div className="fly-flex">
                                    {
                                        Object.keys(project.links).map(key => {
                                            return(
                                                <a href={project.links[key]} target="_blank" className="fly-margin-right">{key}</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </PageTemplate>
    )
}

export default Projects

export const Head = () => <title>flighty's work</title>
