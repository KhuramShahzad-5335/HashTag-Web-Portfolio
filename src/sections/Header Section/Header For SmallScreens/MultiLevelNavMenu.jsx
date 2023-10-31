/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { motion } from "framer-motion"

function NavAccordion({ level, title, items }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div 
      animate = {{opacity : [0, 1], y : [20, 0]}}
      transition = {{duration : 0.5}}
    >
      <Accordion sx={{ boxShadow: 'none' }}>
        <AccordionSummary onClick={handleToggle} sx={{color : "#212121", border :"none", boxShadow:"none", backgroundColor: "#fff", outline :"none", display: 'flex', flexDirection :"row-reverse"}}>
          <Typography sx={{color : "#212121", flexGrow: 1, textAlign: 'left'}}>{title}</Typography>
          {level === ('What We Do' || 'Who We Serve' || 'Technologies' || 'How We Engage' || 'Who We Are') && <AddIcon />}
          {level !== ('What We Do' || 'Who We Serve' || 'Technologies' || 'How We Engage' || 'Who We Are') && (expanded ? <RemoveIcon /> : <ExpandMoreIcon />)}
        </AccordionSummary>
        <AccordionDetails>
          {items.map((item) => (
            <div key={item.title} style={{padding : "0px 10px"}}>
              {item.link ? (
                <a href={item.link} style={{margin : "10px 0px"}}>
                  {item.title}
                </a>
              ) : (
                <NavAccordion level={`level${parseInt(level[5]) + 1}`} title={item.title} items={item.items} />
              )}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
}

function NavBarSM() {
  const items = [
    {
      title: 'What We Do',
      items: [
        {
          title: 'Strategy Conciling',
          items: [
            {
              title: 'Discovery Workshop',
              link: '#',
            },
            {
              title: 'Digital Transformation',
              link: '#',
            },
            {
              title: 'Text Audit & Advisory',
              link: '#',
            },
            {
                title: 'Data Maturity Assessment',
                link: '#',
              },
          ],
        },
        {
          title: 'Solutions Engineering',
          items: [
            {
              title: 'Custom Software Development',
              link: '#',
            },
            {
              title: 'Quality Assurance Services',
              link: '#',
            },
            {
                title: 'Application Integration',
                link: '#',
              },
            {
                title: 'Cloud Services',
                link: '#',
              },
          ],
        },
        {
            title: 'Data Service And Solutions',
            items: [
              {
                title: 'Data Services',
                link: '#',
              },
              {
                title: 'Data Strategy',
                link: '#',
              },
              {
                  title: 'Data Engineering',
                  link: '#',
                },
              {
                  title: 'AI & ML Services',
                  link: '#',
                },
            ],
          },
          {
            title: 'Design Studio',
            items: [
              {
                title: 'User Experience Design',
                link: '#',
              },
              {
                title: 'Design System',
                link: '#',
              },
              {
                  title: 'UX Audit',
                  link: '#',
                },
              {
                  title: 'User Research',
                  link: '#',
                },
                {
                    title: 'Brand Identity Workshops',
                    link: '#',
                  },
                  {
                    title: 'Startup Bootcamp',
                    link: '#',
                  },
            ],
          },
      ],
    },
    
    
    {
      title: 'Who We Serve',
      items: [
        {
          title: 'Featured Work',
          items: [
            {
              title: 'Featured Work',
              link : '#'
            }
          ],
        },
        {
          title: 'Industries',
          items: [
            {
              title: 'Mobility & Logistics',
              link: '#',
            },
            {
              title: 'On-Demand Services',
              link: '#',
            },
            {
              title: 'On-Demand Delivery',
              link: '#',
            },
            {
                title: 'Financial Services',
                link: '#',
              },
              {
                title: 'Healthcare',
                link: '#',
              },
          ],
        },

        {
            title: 'Business Size',
            items: [
              {
                title: 'Startups',
                link: '#',
              },
              {
                title: 'Organizations',
                link: '#',
              },
            ],
          },
      ],
    },





    {
        title: 'Technologies',
        items: [
          {
            title: 'App',
            items: [
                {
                    title: 'Android',
                    link: '#',
                  },
                  {
                    title: 'iOS',
                    link: '#',
                  },
                  {
                    title: 'Cross Platform',
                    link: '#',
                  },
            ],
          },
          {
            title: 'Web Dev',
            items: [
            {
                title: 'Custom',
                link: '#',
            },
              {
                title: 'MERN Stack',
                link: '#',
              },
            ],
          },
          {
              title: 'Backend',
              items: [
                {
                  title: 'Laravel',
                  link: '#',
                },
                {
                  title: 'Node JS',
                  link: '#',
                },
              ],
            },
            {
                title: 'Platform Partnerships',
                items: [
                  {
                    title: 'Salesforce',
                    link: '#',
                  },
                  {
                    title: 'AWS',
                    link: '#',
                  },
                ],
              },

              {
                title: 'Web 3.0',
                items: [
                  {
                    title: 'NFT Development',
                    link: '#',
                  },
                  {
                    title: 'Web 3.0 Real Estate Development',
                    link: '#',
                  },
                  {
                    title: 'Web 3.0 Store Development',
                    link: '#',
                  },
                  {
                    title: 'Decentralized Finance (DeFi) Development',
                    link: '#',
                  },
                  {
                    title: 'Digital Twins',
                    link: '#',
                  },
                ],
              },
        ],
      },










      {
        title: 'How We Engage',
        items: [
          {
            title: 'Team As A Service',
            items: [
                {
                    title: 'Best Fit IT-Resources',
                    link: '#',
                  },
                  {
                    title: 'Development Squads',
                    link: '#',
                  },
            ],
          },
          {
            title: 'Fixed Scope & Timeline',
            items: [
              {
                title: 'Fixed Scope & Timeline',
                link: '#',
              }
            ],
          },
          {
              title: '24 / 7 Montoring And Management',
              items: [
                {
                  title: 'Laravel',
                  link: '#',
                },
                {
                  title: 'Node JS',
                  link: '#',
                },
              ],
            },
        ],
      },







      {
        title: 'Who We Are',
        items: [
          {
            title: 'About Hashtag Web',
            items: [
                {
                    title: 'About Hashtag Web',
                    link: '#',
                  },
            ],
          },
          {
            title: 'Insights',
            items: [
              {
                title: 'Insights',
                link: '#',
              }
            ],
          },
        ],
      },
  ];

  return (
    <div>
      {items.map((item) => (
        <NavAccordion key={item.title} level="level1" title={item.title} items={item.items}/>
      ))}
      
    </div>
  );
}

export default NavBarSM;