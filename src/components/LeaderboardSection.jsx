import React, { useState } from 'react';
import { Award, Trophy, Clock, Flame, Headphones, Sparkles, Sliders, ChevronRight, User } from 'lucide-react';
import { mockLeaderboard, sampleUserProfile } from '../data/leaderboardData';

export default function LeaderboardSection() {
  const [activeTab, setActiveTab] = useState('leaderboard'); // 'leaderboard' | 'profile'
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly');

  return (
    <section id="leaderboard" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-glow" style={{ marginBottom: '16px' }}>
            <Award size={14} color="#A78BFA" />
            <span>COMMUNITY & GAMIFICATION</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '16px' }}>
            Celebrate Your Server’s <span className="gradient-text-fire">Top Vibers</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.65 }}>
            Music is inherently social. Shadow Music automatically ranks your server’s most devoted listeners and builds rich, holographic listening DNA profiles.
          </p>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'inline-flex',
              padding: '6px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              marginTop: '28px',
              gap: '6px'
            }}
          >
            <button
              onClick={() => setActiveTab('leaderboard')}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                background: activeTab === 'leaderboard' ? 'linear-gradient(135deg, #8B5CF6, #6366F1)' : 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: activeTab === 'leaderboard' ? '0 4px 15px rgba(139, 92, 246, 0.4)' : 'none'
              }}
            >
              <Trophy size={16} />
              <span>/leaderboard Ranking</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                background: activeTab === 'profile' ? 'linear-gradient(135deg, #8B5CF6, #6366F1)' : 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: activeTab === 'profile' ? '0 4px 15px rgba(139, 92, 246, 0.4)' : 'none'
              }}
            >
              <User size={16} />
              <span>/musicprofile Hologram</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Based on Tab */}
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          
          {activeTab === 'leaderboard' ? (
            /* Leaderboard Table View */
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '30px',
                background: 'linear-gradient(180deg, rgba(20, 24, 38, 0.9) 0%, rgba(12, 15, 24, 0.95) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Cyberpunk Syndicate Music Champions
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    Rankings update automatically every 60 seconds
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  {['weekly', 'monthly', 'all-time'].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setSelectedTimeframe(tf)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: selectedTimeframe === tf ? 'rgba(139, 92, 246, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                        border: selectedTimeframe === tf ? '1px solid #8B5CF6' : '1px solid transparent',
                        color: selectedTimeframe === tf ? '#C084FC' : '#94A3B8',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'capitalize',
                        cursor: 'pointer'
                      }}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              {/* Members List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {mockLeaderboard.map((user) => (
                  <div
                    key={user.rank}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      borderRadius: '14px',
                      background:
                        user.rank === 1
                          ? 'linear-gradient(90deg, rgba(245, 158, 11, 0.12) 0%, rgba(20, 24, 38, 0.6) 100%)'
                          : user.rank === 2
                          ? 'linear-gradient(90deg, rgba(236, 72, 153, 0.1) 0%, rgba(20, 24, 38, 0.6) 100%)'
                          : 'rgba(255, 255, 255, 0.02)',
                      border:
                        user.rank === 1
                          ? '1px solid rgba(245, 158, 11, 0.35)'
                          : user.rank === 2
                          ? '1px solid rgba(236, 72, 153, 0.25)'
                          : '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'transform 0.15s ease',
                    }}
                  >
                    {/* Left: Rank & User Avatar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div
                        style={{
                          width: '32px',
                          fontSize: '1.1rem',
                          fontWeight: 800,
                          color: user.rank === 1 ? '#F59E0B' : user.rank === 2 ? '#EC4899' : user.rank === 3 ? '#A78BFA' : '#64748B',
                          textAlign: 'center',
                          fontFamily: 'var(--font-heading)'
                        }}
                      >
                        #{user.rank}
                      </div>

                      <div style={{ position: 'relative' }}>
                        <img
                          src={user.avatar}
                          alt={user.username}
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid rgba(255,255,255,0.1)'
                          }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: user.status === 'online' ? '#10B981' : user.status === 'dnd' ? '#EF4444' : '#F59E0B',
                            border: '2px solid #0B0E14'
                          }}
                        />
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.95rem' }}>
                            {user.username}
                          </span>
                          <span style={{ color: '#64748B', fontSize: '0.75rem' }}>{user.discriminator}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: user.badgeColor, fontWeight: 600 }}>
                          {user.badge}
                        </div>
                      </div>
                    </div>

                    {/* Right: Stats & Genre */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="leaderboard-right">
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>
                          {user.hours}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                          {user.tracksCount} tracks
                        </div>
                      </div>

                      <div
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.75rem',
                          color: '#CBD5E1',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {user.topGenre}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* User Profile Hologram Card View */
            <div
              className="glass-card"
              style={{
                borderRadius: '24px',
                padding: '36px',
                background: 'linear-gradient(135deg, rgba(25, 32, 54, 0.95) 0%, rgba(13, 16, 26, 0.98) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 40px rgba(139, 92, 246, 0.25)',
              }}
            >
              {/* Profile Top Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '20px',
                  marginBottom: '28px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      boxShadow: '0 8px 25px rgba(139, 92, 246, 0.5)'
                    }}
                  >
                    ⚡
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                        {sampleUserProfile.username}
                      </h3>
                      <span style={{ color: '#64748B' }}>{sampleUserProfile.tag}</span>
                      <span
                        style={{
                          padding: '2px 8px',
                          borderRadius: '100px',
                          background: 'rgba(245, 158, 11, 0.2)',
                          color: '#FBBF24',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          fontSize: '0.72rem',
                          fontWeight: 700
                        }}
                      >
                        {sampleUserProfile.rank}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: '#94A3B8', marginTop: '2px' }}>
                      Level {sampleUserProfile.level} Audiophile • {sampleUserProfile.joinedDate}
                    </div>
                  </div>
                </div>

                {/* Hours & Tracks */}
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#22D3EE', fontFamily: 'var(--font-mono)' }}>
                      {sampleUserProfile.totalHours}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Time In Voice Channel</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#A78BFA', fontFamily: 'var(--font-mono)' }}>
                      {sampleUserProfile.totalTracks}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Songs Streamed</div>
                  </div>
                </div>
              </div>

              {/* XP Progress Bar */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>XP to Level 43</span>
                  <span style={{ color: '#C084FC', fontWeight: 700 }}>{sampleUserProfile.xpProgress}% (3,120 / 4,000 XP)</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${sampleUserProfile.xpProgress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #8B5CF6, #EC4899)'
                    }}
                  />
                </div>
              </div>

              {/* Earned Badges Showcase */}
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Holographic Server Badges:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  {sampleUserProfile.badges.map((b, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <Sparkles size={14} color="#A78BFA" />
                        <span style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.875rem' }}>{b.title}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .leaderboard-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
