import React, {useState, useEffect, useRef } from "react";
import './App.css';
import {Teams, TeamPlayers} from './data/haikyudata';
import {Tropes, Conflict, Relationship_Dynamics, Setting_Generes} from "./data/prompts";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
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
        //columnsConfig.map(() => [])
        columnsConfig.map((col) => {
            if (col.type === 'teams') return [...Teams];
            return col.list ? [...col.list] : [];
        })
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

                // turn the team list into a player pool
                const playerPool = teamsToUse.flatMap((teamName) => {
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
        <Box sx={{ p: 2 }}>
            <div className="columns-container">
                {columnsConfig.map((col, colIndex) => {
                    // source list to render as checkboxes
                    const options = col.type === 'teams' ? Teams : (col.list || []);
                    return (
                        <Paper key={col.id} elevation={1} sx={{ p: 1, maxHeight: 320, overflowY: 'auto' }}>
                            <div className="column-header">
                                <Typography variant="subtitle2">{col.label}</Typography>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            size="small"
                                            checked={activeColumns[colIndex]}
                                            onChange={() => toggleInclude(colIndex)}
                                        />
                                    }
                                    label="Include"
                                    labelPlacement="start"
                                />
                            </div>

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
                        </Paper>
                    );
                })}
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
                <Button variant="contained" color="primary" onClick={handleRandomize}>
                    Randomize
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        setSelectedItems(columnsConfig.map(() => []));
                        setLastResult(null);
                    }}
                >
                    Clear selections
                </Button>
            </Box>

            <Box sx={{ mt: 3 }}>
                <Typography variant="h6">Randomized result</Typography>
                <Paper sx={{ p: 2, mt: 1, whiteSpace: 'pre-wrap' }}>
                    {lastResult ? (
                        Object.entries(lastResult).map(([k, v]) => (
                            <div key={k}>
                                <strong>{k}:</strong> {String(v)}
                            </div>
                        ))
                    ) : (
                        <div>No result yet — toggle some columns & select items, then press Randomize.</div>
                    )}
                </Paper>
            </Box>
        </Box>
    );
};

export default HaikyuGenerator;