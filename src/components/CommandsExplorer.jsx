import React, { useState, useMemo } from 'react';
import { 
  Search, Terminal, Copy, Check, Sparkles, Disc, Bot, 
  Sliders, Shield, BarChart2, ChevronDown, ChevronUp 
} from 'lucide-react';
import { commandCategories, commandsList } from '../data/commandsData';

export default function CommandsExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCommand, setCopiedCommand] = useState(null);
  const [expandedCommand, setExpandedCommand] = useState(null);

  const iconMap = {
    Sparkles: <Sparkles size={16} />,
    Disc: <Disc size={16} />,
    Bot: <Bot size={16} />,
    Sliders: <Sliders size={16} />,
    Shield: <Shield size={16} />,
    BarChart2: <BarChart2 size={16} />,
  };

  const filteredCommands = useMemo(() => {
    return commandsList.filter((cmd) => {
      const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cmd.name.toLowerCase().includes(q) ||
        cmd.description.toLowerCase().includes(q) ||
        cmd.usage.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (cmdName) => {
    navigator.clipboard.writeText(cmdName);
    setCopiedCommand(cmdName);
    setTimeout(() => {
      setCopiedCommand(null);
    }, 2000);
  };

  return (
    <section id="commands" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Terminal size={14} color="#A78BFA" />
            <span>DISCORD SLASH COMMANDS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '16px' }}>
            Command <span className="gradient-text-violet">Arsenal</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Explore the full suite of slash commands available in Shadow Music. Click any command to copy it directly into Discord.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div style={{ maxWidth: '1050px', margin: '0 auto 40px auto' }}>
          
          {/* Instant Search Bar */}
          <div
            style={{
              position: 'relative',
              marginBottom: '24px',
            }}
          >
            <Search
              size={20}
              color="#64748B"
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
            <input
              type="text"
              placeholder="Search slash commands (e.g. /play, /filter, /autodj, 8d, queue)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 54px',
                borderRadius: '16px',
                background: 'rgba(18, 22, 34, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                color: '#FFFFFF',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(139, 92, 246, 0.25)')}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '8px',
            }}
          >
            {commandCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '100px',
                    background: active ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    border: active ? '1px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: active ? '#FFFFFF' : '#94A3B8',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.18s ease',
                    boxShadow: active ? '0 0 16px rgba(139, 92, 246, 0.3)' : 'none'
                  }}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Commands Grid */}
        <div
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredCommands.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '60px 20px',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '20px',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
                color: '#94A3B8',
              }}
            >
              <Terminal size={40} color="#64748B" style={{ marginBottom: '14px' }} />
              <h3 style={{ color: '#FFFFFF', marginBottom: '6px' }}>No commands found</h3>
              <p>No slash commands match your search query "{searchQuery}".</p>
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const isCopied = copiedCommand === cmd.name;
              const isExpanded = expandedCommand === cmd.name;

              return (
                <div
                  key={cmd.name}
                  className="glass-card"
                  style={{
                    borderRadius: '18px',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    background: 'linear-gradient(160deg, rgba(22, 28, 42, 0.75) 0%, rgba(13, 16, 26, 0.85) 100%)',
                    transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s'
                  }}
                >
                  <div>
                    {/* Top Row: Command Name & Copy Button */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <code
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            background: 'rgba(139, 92, 246, 0.15)',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            border: '1px solid rgba(139, 92, 246, 0.3)'
                          }}
                        >
                          {cmd.name}
                        </code>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '2px 7px',
                            borderRadius: '100px',
                            background:
                              cmd.badge === 'AI Core'
                                ? 'rgba(139, 92, 246, 0.2)'
                                : cmd.badge === 'DSP Studio'
                                ? 'rgba(236, 72, 153, 0.2)'
                                : cmd.badge === 'Admin'
                                ? 'rgba(16, 185, 129, 0.2)'
                                : 'rgba(6, 182, 212, 0.15)',
                            color:
                              cmd.badge === 'AI Core'
                                ? '#C084FC'
                                : cmd.badge === 'DSP Studio'
                                ? '#F472B6'
                                : cmd.badge === 'Admin'
                                ? '#34D399'
                                : '#22D3EE',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {cmd.badge}
                        </span>
                      </div>

                      {/* Copy Action Button */}
                      <button
                        onClick={() => handleCopy(cmd.name)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          background: isCopied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                          border: isCopied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.1)',
                          color: isCopied ? '#34D399' : '#CBD5E1',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.15s'
                        }}
                        title="Copy command to clipboard"
                      >
                        {isCopied ? <Check size={14} /> : <Copy size={14} />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: '#94A3B8',
                        lineHeight: 1.5,
                        marginBottom: '14px',
                      }}
                    >
                      {cmd.description}
                    </p>
                  </div>

                  {/* Bottom: Usage & Parameters Toggle */}
                  <div>
                    <div
                      style={{
                        padding: '8px 10px',
                        borderRadius: '8px',
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: '#A78BFA',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        marginBottom: '10px'
                      }}
                    >
                      {cmd.usage}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Shield size={13} /> {cmd.permission}
                      </span>
                      {cmd.parameters.length > 0 && (
                        <button
                          onClick={() => setExpandedCommand(isExpanded ? null : cmd.name)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#8B5CF6',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>{cmd.parameters.length} params</span>
                          {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                        </button>
                      )}
                    </div>

                    {/* Expandable Parameters Drawer */}
                    {isExpanded && cmd.parameters.length > 0 && (
                      <div
                        style={{
                          marginTop: '12px',
                          paddingTop: '10px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}
                      >
                        {cmd.parameters.map((param, pIdx) => (
                          <div key={pIdx} style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                            <span style={{ color: '#22D3EE', fontFamily: 'var(--font-mono)' }}>[{param.name}]</span>
                            {' - '}
                            <span style={{ color: '#CBD5E1' }}>{param.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
