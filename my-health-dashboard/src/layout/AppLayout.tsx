
import * as React from 'react';
import {
  AppBar, Toolbar, Box, IconButton, TextField, Drawer, List, ListItemButton,
  ListItemIcon, Tooltip
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import InsightsIcon from '@mui/icons-material/Insights';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DRAWER_W = 72;

type Props = { children: React.ReactNode; current?: 'dashboard'|'patients'|'appointments'|'analytics'|'settings' };

export default function AppLayout({ children, current = 'dashboard' }: Props): React.JSX.Element {
  return (
    <Box sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', minHeight: '100vh' }}>
      {/* Skip link */}
      <a
        href="#main"
        style={{ position: 'absolute', left: -9999, top: 0 }}
        onFocus={(e) => (e.currentTarget.style.left = '16px')}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
      >
        Skip to main content
      </a>

      {/* Header */}
      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar sx={{ gap: 2 }}>
          {/* logo placeholder */}
          <Box sx={{ width: 28, height: 28, borderRadius: 1.5, bgcolor: 'warning.main' }} aria-hidden />
          <Box component="h1" sx={{ fontSize: 20, fontWeight: 600, m: 0 }}>
            Health Overview
          </Box>

          <Box sx={{ flex: 1 }} />

          {/* search + icons */}
          <TextField
            size="small"
            placeholder="Search…"
            aria-label="Search"
            sx={{ width: 260, bgcolor: 'background.paper', borderRadius: 2 }}
          />
          <Tooltip title="Toggle theme"><IconButton aria-label="Toggle theme"><DarkModeIcon /></IconButton></Tooltip>
          <Tooltip title="Notifications"><IconButton aria-label="Notifications"><NotificationsIcon /></IconButton></Tooltip>
          <Box aria-label="Account" role="img" sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: 'grey.300' }} />
        </Toolbar>
      </AppBar>

      {/* Body grid: left rail + main */}
      <Box sx={{ display: 'grid', gridTemplateColumns: `${DRAWER_W}px 1fr`, minHeight: 0 }}>
        <LeftRail current={current} />
        <Box id="main" tabIndex={-1} component="main" sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

function LeftRail({ current }: { current: Props['current'] }): React.JSX.Element {
  const items: Array<{ key: Props['current']; icon: React.ReactNode; label: string; href: string }> = [
    { key: 'dashboard',   icon: <DashboardIcon />, label: 'Dashboard',   href: '#' },
    { key: 'patients',    icon: <PersonIcon />,    label: 'Patients',    href: '#' },
    { key: 'appointments',icon: <EventIcon />,     label: 'Appointments',href: '#' },
    { key: 'analytics',   icon: <InsightsIcon />,  label: 'Analytics',   href: '#' },
    { key: 'settings',    icon: <SettingsIcon />,  label: 'Settings',    href: '#' }
  ];

  return (
    <Drawer variant="permanent" PaperProps={{ sx: { width: 72, borderRight: 1, borderColor: 'divider' } }}>
      <Toolbar /> {/* matches AppBar height for alignment */}
      <List sx={{ p: 1 }}>
        {items.map((it) => (
          <Tooltip key={it.key} title={it.label} placement="right">
            <ListItemButton
              href={it.href}
              component="a"
              selected={current === it.key}
              aria-current={current === it.key ? 'page' : undefined}
              sx={{ borderRadius: 2, mb: 1, justifyContent: 'center' }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 0, justifyContent: 'center' }}>
                {it.icon}
              </ListItemIcon>
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}
