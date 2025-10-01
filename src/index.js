// src/index.js
export { default as Board } from './components/Board/Board';
export { default as Button } from './components/Button/Button';
export { default as Cell } from './components/Cell/Cell';
export { default as Controls } from './components/Controls/Controls';
export { default as GameStatus } from './components/GameStatus/GameStatus';
export { default as Header } from './components/Header/Header';
export { default as HomePage } from './components/HomePage/HomePage';
export { default as ScoreBoard } from './components/ScoreBoard/ScoreBoard';
export { default as Modal } from './components/Modal/Modal';
export { default as AboutModal } from './components/AboutModal/AboutModal';

export { default as GameStatusFromContext } from './components/GameStatus/GameStatus.fromContext';
export { default as HeaderFromContext } from './components/Header/Header.fromContext';
export { default as ScoreBoardFromContext } from './components/ScoreBoard/ScoreBoard.fromContext';

export * from './configuration';
export { MockGameProvider, useGame } from './mocks/gameProvider.mock';
