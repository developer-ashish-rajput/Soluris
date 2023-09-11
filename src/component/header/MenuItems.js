import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { v4 as uuid } from 'uuid';
import './NavigationMenu.css';
import { NavLink, useLocation } from 'react-router-dom';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const styleProps = {
    '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
    '--tree-view-bg-color': theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 0.5,
            pr: 0,
          }}
        >
          <Box component={LabelIcon} color='inherit' sx={{ mr: 1 }} />
          <Typography variant='body1' sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant='caption' color='inherit'>
            {labelInfo}
          </Typography>
        </Box>
      }
      style={styleProps}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  bgColorForDarkMode: PropTypes.string,
  color: PropTypes.string,
  colorForDarkMode: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function GmailTreeView() {
  const { pathname, hash } = useLocation();
  const RenderLabel = (label, count = 0) => {
    const nbspArray = Array.from({ length: count }, () => `\u00A0`);
    return (
      <span>
        <>{nbspArray.join('')}</>
        {label}
      </span>
    );
  };

  const menuItems = [
    {
      label: 'Home',
      id: uuid(),
      child: [],
      path: '/',
    },
    {
      label: 'About',
      id: uuid(),
      child: [],
      goTo: '/#about',
    },
    {
      label: 'Our Services',
      id: uuid(),
      node: true,
      child: [
        {
          label: 'Software Services',
          id: uuid(),
          node: true,
          child: [
            { label: RenderLabel('Application Development', 3), id: uuid() },
            { label: RenderLabel('Maintenance & Support', 3), id: uuid() },
            { label: RenderLabel('Web Enabling of Legacy Application', 3), id: uuid() },
            { label: RenderLabel('Mobile Application', 3), id: uuid() },
          ],
        },
        {
          label: 'CRM Development',
          id: uuid(),
          node: true,
          child: [
            { label: RenderLabel('Consulting Services', 3), id: uuid() },
            { label: RenderLabel('Integration', 3), id: uuid() },
            { label: RenderLabel('Maintenance & Support', 3), id: uuid() },
          ],
        },
        {
          label: 'Website Development',
          id: uuid(),
          node: true,
          child: [
            { label: RenderLabel('Website Design', 3), id: uuid() },
            { label: RenderLabel('ECommerce Website', 3), id: uuid() },
            { label: RenderLabel('CMS Website', 3), id: uuid() },
            { label: RenderLabel('Flash Application Development', 3), id: uuid() },
          ],
        },
        {
          label: 'Training & Placement',
          id: uuid(),
          node: true,
          child: [
            { label: RenderLabel('Transformation Outsourcing', 3), id: uuid(), path: '/transformation-outsourcing' },
            { label: RenderLabel('Skill Development', 3), id: uuid(), path: '/skill-development' },
            { label: RenderLabel('Staffing Solutions', 3), id: uuid(), path: '/staffing-solutions' },
            { label: RenderLabel('Product Development', 3), id: uuid(), path: '/product-development' },
          ],
        },
        {
          label: 'Much More',
          id: uuid(),
          node: true,
          child: [
            { label: RenderLabel('Salesforce Services', 3), id: uuid() },
            { label: RenderLabel('Digital Marketing', 3), id: uuid() },
            { label: RenderLabel('Easy Customizable', 3), id: uuid() },
          ],
        },
      ],
    },
    { label: 'Portfolio', id: uuid(), path: '/portfolio' },
    { label: 'Team', id: uuid(), path: '/team' },
    { label: 'Staff OPS', id: uuid(), path: '/staff-ops' },
    { label: 'Affilate Partner', id: uuid(), path: '/affiliate-partner' },
    { label: 'Contact', id: uuid(), goTo: '/#contact' },
  ];

  const renderTreeItems = (items) => {
    return items.map((item) => {
      if (item.path) {
        return (
          <NavLink to={item.path}>
            <StyledTreeItem
              style={{ backgroundColor: pathname === item.path && !item.goTo ? 'aliceblue' : '' }}
              bgColor={pathname === item.path ? 'aliceblue' : 'gainsboro'}
              key={item.id}
              nodeId={item.id}
              labelText={<span>{item.label}</span>}
            >
              {item?.child && renderTreeItems(item.child)}
            </StyledTreeItem>
          </NavLink>
        );
      } else if (item.goTo) {
        let goTo = item.goTo.split('/')[1];
        return (
          <a href={item.goTo}>
            <StyledTreeItem
              style={{ backgroundColor: hash === goTo ? 'aliceblue' : '' }}
              bgColor={hash === item.goTo ? 'aliceblue' : 'gainsboro'}
              key={item.id}
              nodeId={item.id}
              labelText={<span>{item.label}</span>}
            >
              {item?.child && renderTreeItems(item.child)}
            </StyledTreeItem>
          </a>
        );
      } else {
        return (
          <StyledTreeItem
            bgColor={item?.node ? 'aliceblue' : 'gainsboro'}
            key={item.id}
            nodeId={item.id}
            labelText={<span>{item.label}</span>}
          >
            {item?.child && renderTreeItems(item.child)}
          </StyledTreeItem>
        );
      }
    });
  };

  return (
    <TreeView
      aria-label='gmail'
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTreeItems(menuItems)}
    </TreeView>
  );
}
