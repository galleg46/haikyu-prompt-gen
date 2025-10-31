import React, {useState} from "react";
import './App.css';
import {Teams, TeamPlayers} from './data/haikyudata';
import {Tropes, Conflict, Relationship_Dynamics, Setting_Generes} from "./data/prompts";
import {CharacterImageMap} from "./utils/characterImageMap";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

function HaikyuGenerator() {
    const columnsConfig = [
        { id: 'character-1', label: 'Character 1', type: 'teams' },
        { id: 'character-2', label: 'Character 2', type: 'teams' },
        { id: 'tropes', label: 'Core Tropes & Scenarios', type: 'list', list: Tropes },
        { id: 'relationships', label: 'Relationship Dynamics', type: 'list', list: Relationship_Dynamics },
        { id: 'conflict', label: 'Conflict & Drama', type: 'list', list: Conflict },
        { id: 'setting', label: 'Settings & Genres', type: 'list', list: Setting_Generes }
    ];

    // which columns are included in the randomizer
    const [activeColumns, setActiveColumns] = useState(
        columnsConfig.map(() => true)
    );

    // which checkboxes are selected per column
    const [selectedItems, setSelectedItems] = useState(
        columnsConfig.map((col) => {
            if (col.type === 'teams') return [...Teams];

            return col.list ? [...col.list] : [];
        })
    );

    // store selected characters per team for each "teams" column
    const [selectedCharacters, setSelectedCharacters] = useState(
        columnsConfig.map((col) => {
            if (col.type !== 'teams') return null;

            const teamObj = {};
            Teams.forEach((team) => {
                teamObj[team] = [ ...(TeamPlayers[team] || [])]; // all characters pre-selected by default
            });

            return teamObj;
        })
    );

    // store which teams are expanded to show children
    const [expandedTeams, setExpandedTeams] = useState(
        columnsConfig.map((col) => (col.type === 'teams' ? {} : null))
    );

    // randomized result shown in UI
    const [lastResult, setLastResult] = useState(null);

    // HELPERS //
    const toggleInclude = (index) => {
        setActiveColumns((prev) => prev.map((v, i) => (i === index ? !v : v)));
    };

    const handleCheckboxChange = (colIndex, item) => {
        setSelectedItems((prev) => {
            const colSel = prev[colIndex];
            const exists = colSel.includes(item);
            const newColSel = exists ? colSel.filter((x) => x !== item) : [...colSel, item];

            return prev.map((arr, i) => (i === colIndex ? newColSel : arr));
        });
    };

    // handle toggling characters for a team
    const handleCharacterCheckboxChange = (colIndex, team, character) => {
        setSelectedCharacters((prev) => {
            const current = prev[colIndex][team] || [];
            const exists = current.includes(character);
            const updated = exists ? current.filter((c) => c !== character) : [...current, character];
            const newCol = { ...prev[colIndex], [team]: updated };

            return prev.map((val, i) => (i === colIndex ? newCol : val));
        });
    };

    // toggle team expansion
    const toggleTeamExpansion = (colIndex, team) => {
        setExpandedTeams((prev) => {
            const current = prev[colIndex][team] || false;
            const newCol = { ...prev[colIndex], [team]: !current };

            return prev.map((val, i) => (i === colIndex ? newCol : val));
        })
    }

    const pickRandom = (arr) => {
        if (!arr || arr.length === 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const handleRandomize = () => {
        const result = {};

        columnsConfig.forEach((col, index) => {
            if (!activeColumns[index]) return; // skip excluded columns

            if (col.type === 'teams') {
                // if there are selected teams for this column, use them; otherwise fallback to all Teams
                const teamsToUse = selectedItems[index].length ? selectedItems[index] : Teams;

                // get the character pool for selected teams
                const playerPool = teamsToUse.flatMap((teamName) => {
                    const selectedCharsForTeam = selectedCharacters[index]?.[teamName];
                    if (selectedCharsForTeam && selectedCharsForTeam.length > 0) return selectedCharsForTeam;

                    // TeamPlayers keys may not match spacing/casing
                    // try direct, then fallback to space-free key
                    return TeamPlayers[teamName] || TeamPlayers[teamName.replace(/\s+/g, '')] || [];
                });

                result[col.label] = pickRandom(playerPool) || 'No players available';
            } else if (col.type === 'list') {
                const listSource = col.list || [];
                const pool = selectedItems[index].length ? selectedItems[index] : listSource;
                result[col.label] = pickRandom(pool) || 'No Selection';
            }
        });

        setLastResult(result);
    };

    return (
        <Box sx={{ p: 2, height: '100vh', overflow: 'auto', backgroundColor: '#54495c' }}>
            <Box sx={{ mt: 3 }}>
                <Typography align="center" variant="h5" sx={{ color: 'white'}}>Generate pairing</Typography>
                <Paper sx={{ p: 2, mt: 1, mx: 'auto', textAlign: 'center', maxWidth: 400, whiteSpace: 'pre-wrap' }}>
                    {lastResult ? (
                        <>
                            {Object.entries(lastResult).map(([k, v]) => (
                                <div key={k}>
                                    <strong>{k}:</strong> {String(v)}
                                </div>
                            ))}

                            <div style={{ marginTop: "16px" }}>
                                {Object.entries(lastResult).map(([k, v]) =>
                                    (k === "Character 1" || k === "Character 2") ? (
                                        <img key={k} src={CharacterImageMap[String(v)]} alt={String(v)} style={{ margin: "5px" }}/>
                                    ) : null
                                )}
                            </div>
                        </>
                    ) : (
                        <div>Toggle some columns & select items, then press Randomize.</div>
                    )}
                </Paper>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2, gap: 2 }}>
                <Button variant="contained" color="primary" onClick={handleRandomize}>Randomize</Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setSelectedItems(columnsConfig.map(() => []));
                        setSelectedCharacters(columnsConfig.map((col) => {
                            if (col.type !== 'teams') return null;
                            const teamObj = {};
                            Teams.forEach((team) => {
                                teamObj[team] = [...(TeamPlayers[team] || [])];
                            });
                            return teamObj;
                        }));
                        setExpandedTeams(columnsConfig.map((col) => (col.type === 'teams' ? {} : null)));
                        setLastResult(null);
                    }}
                >
                    Clear selections
                </Button>
            </Box>

            <div className="columns-container">
                {columnsConfig.map((col, colIndex) => {
                    const options = col.type === 'teams' ? [...Teams].sort() : (col.list.sort() || []);
                    return (
                        <Paper key={col.id} elevation={1} square={false} sx={{ p: 0, maxHeight: 336, overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
                            <div className="column-header" 
                                 style={{
                                    position: 'sticky',
                                    top: 0,
                                    backgroundColor: 'white',
                                    zIndex: 1,
                                    padding: '8px',
                                    marginBottom: 0,
                                    borderBottom: '1px solid #e0e0e0'
                                 }}>
                                <Typography variant="subtitle2">{col.label}</Typography>
                                <FormControlLabel
                                    control={
                                        <Switch sx={{ marginRight: 0.5 }} size="small" checked={activeColumns[colIndex]} onChange={() => toggleInclude(colIndex)} />
                                    }
                                    label={<Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', lineHeight: 1.2 }}>Include</Typography>}
                                    labelPlacement="start"
                                />
                            </div>

                            {activeColumns[colIndex] && (
                            <div style={{ padding: '8px' }}>
                                {col.type === 'teams' ? (
                                    <div>
                                        {options.map((team) => (
                                            <Box key={team} sx={{ mb: 1 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                size="small"
                                                                checked={selectedItems[colIndex].includes(team)}
                                                                onChange={() => handleCheckboxChange(colIndex, team)}
                                                            />
                                                        }
                                                        label={team}
                                                        sx={{ mr: 0 }}
                                                    />
                                                    {selectedItems[colIndex].includes(team) && (
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => toggleTeamExpansion(colIndex, team)}
                                                            sx={{ p: 0, ml: 0.5 }}
                                                        >
                                                            <ExpandMoreIcon
                                                                sx={{
                                                                    transform: expandedTeams[colIndex]?.[team] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                    transition: 'transform 0.2s'
                                                                }}
                                                            />
                                                        </IconButton>
                                                    )}
                                                </Box>

                                                {selectedItems[colIndex].includes(team) && expandedTeams[colIndex]?.[team] && (
                                                    <FormGroup sx={{ pl: 4, mt: 0.5 }}>
                                                        {(TeamPlayers[team].sort() || []).map((char) => (
                                                            <FormControlLabel
                                                                key={char}
                                                                control={
                                                                    <Checkbox
                                                                        size="small"
                                                                        checked={selectedCharacters[colIndex]?.[team]?.includes(char) || false}
                                                                        onChange={() => handleCharacterCheckboxChange(colIndex, team, char)}
                                                                    />
                                                                }
                                                            label={char}
                                                            />
                                                        ))}
                                                    </FormGroup>
                                                )}
                                            </Box>
                                        ))}
                                    </div>
                                ) : (
                                    <FormGroup>
                                        {options.map((opt) => (
                                            <FormControlLabel
                                                key={opt}
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        checked={selectedItems[colIndex].includes(opt)}
                                                        onChange={() => handleCheckboxChange(colIndex, opt)}
                                                    />
                                                }
                                                label={opt}
                                            />
                                        ))}
                                    </FormGroup>
                                )}
                            </div>
                            )}
                        </Paper>
                    );
                })}
            </div>
        </Box>
    );
}

export default HaikyuGenerator;