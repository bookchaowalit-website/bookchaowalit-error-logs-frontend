"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type LogRow = { id: string; time: string; name: string; value: string; status: "warn" | "down" | "ok"; service: string; detail: string };
const LOGS: LogRow[] = [
  { id: "type-error", time: "14:03:22", name: "TypeError: x", value: "8", status: "warn", service: "checkout-ui", detail: "Cannot read properties of undefined (reading 'call')" },
  { id: "api-500", time: "13:58:09", name: "API 500", value: "1", status: "down", service: "tip-jar-api", detail: "POST /record returned 500 in the sample trace" },
  { id: "hydration", time: "12:44:16", name: "Hydration mismatch", value: "4", status: "warn", service: "portfolio-shell", detail: "Server and client markup differ in the sample payload" },
  { id: "asset", time: "11:31:47", name: "Missing asset", value: "2", status: "ok", service: "artblog", detail: "Fallback artwork served; no user-facing break" },
];
const RANGES = ["24h", "7d", "30d"];

export default function Home() {
  const [range, setRange] = useState("7d");
  const [selected, setSelected] = useState(LOGS[0]);
  const visible = useMemo(() => range === "24h" ? LOGS.slice(0, 3) : LOGS, [range]);
  return <main className="el-page">
    <header className="el-topbar"><Link className="el-mark" href="/">ERR / ROOM</Link><span>SAMPLE SIGNALS / NO INGESTION</span><span className="el-mode"><i /> READ-ONLY</span></header>
    <section className="el-hero"><div className="el-hero-copy"><p className="el-stamp">INCIDENT ROOM / SAMPLE DATA</p><h1>Errors leave<br /><span>a trail.</span></h1><p className="el-intro">A compact surface for reading client error samples. Follow a row from signal to context without pretending this demo is connected to a production stream.</p><div className="el-legend"><span><i className="el-dot el-dot-red" /> incident</span><span><i className="el-dot el-dot-amber" /> needs attention</span><span><i className="el-dot el-dot-green" /> contained</span></div></div><aside className="el-incident"><div className="el-incident-head"><span>ACTIVE SAMPLE</span><b>{selected.status.toUpperCase()}</b></div><div className="el-incident-body"><strong>{selected.name}</strong><p>{selected.detail}</p><div><span>{selected.service}</span><span>{selected.time} UTC</span></div></div></aside></section>
    <section className="el-board" aria-labelledby="board-title"><div className="el-board-head"><div><span className="el-board-code">01 / SIGNAL BOARD</span><h2 id="board-title">Read the room.</h2></div><div className="el-range" role="group" aria-label="Sample time range">{RANGES.map((item) => <button type="button" key={item} className={range === item ? "is-active" : ""} onClick={() => setRange(item)}>{item}</button>)}</div></div><div className="el-summary-line"><span>{visible.length} named signals in sample window</span><strong>Window / {range}</strong></div><div className="el-log-table"><div className="el-log-table-head"><span>TIME</span><span>SIGNAL</span><span>SERVICE</span><span>COUNT</span><span>STATE</span></div>{visible.map((log) => <button type="button" className={`el-log-row ${selected.id === log.id ? "is-selected" : ""}`} key={log.id} onClick={() => setSelected(log)}><span>{log.time}</span><strong>{log.name}</strong><span>{log.service}</span><b>{log.value}</b><span className={`el-state el-state-${log.status}`}>{log.status}</span></button>)}</div></section>
    <section className="el-footnote"><span>02 / HONEST LIMIT</span><p>Sample data only. The interface demonstrates triage states, range selection, and a readable incident trail; it does not receive or store real application errors.</p></section>
    <footer className="el-footer"><strong>NO LIVE PIPELINE ATTACHED.</strong><span>Error Logs · Bookchaowalit · sample board</span></footer>
  </main>;
}
