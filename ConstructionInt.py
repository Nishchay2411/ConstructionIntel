import streamlit as st
import pandas as pd
import numpy as np
import time
from datetime import datetime

# Page configuration
st.set_page_config(
    page_title="ConstructAI | Intelligent Construction Intelligence Platform",
    page_icon="🏗️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling (Dark theme with construction accents)
st.markdown("""
<style>
    .main {
        background-color: #0b0f19;
    }
    .metric-card {
        background: linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.8) 100%);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 18px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }
    .status-badge {
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.82rem;
        font-weight: 600;
        display: inline-block;
    }
    .badge-critical { background-color: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
    .badge-warning { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    .badge-success { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
</style>
""", unsafe_allow_html=True)

# Top Bar / Header
with st.sidebar:
    st.markdown("## 🏗️ **ConstructAI**")
    st.caption("AI-Powered Construction Intelligence Platform")
    st.markdown("---")
    
    project = st.selectbox(
        "Active Project",
        [
            "Skyline Tower B - Structural Phase",
            "Metro Line 4 - Underground Tunnels",
            "Apex Logistics Hub - Foundation Work"
        ]
    )
    
    navigation = st.radio(
        "Modules Navigation",
        [
            "🛡️ Site Safety Radar",
            "🔍 Structural Defect Analysis",
            "📅 Schedule & Weather Planner",
            "💰 Cost & Valuation Engine",
            "🤖 ConstructAI Assistant"
        ]
    )
    
    st.markdown("---")
    st.markdown("### 📡 System Telemetry")
    col_t1, col_t2 = st.columns(2)
    with col_t1:
        st.markdown("<span class='status-badge badge-success'>🟢 Vision AI Live</span>", unsafe_allow_html=True)
    with col_t2:
        st.markdown("<span class='status-badge badge-success'>🟢 Telemetry Sync</span>", unsafe_allow_html=True)
        
    st.caption(f"Last sync: {datetime.now().strftime('%H:%M:%S')} UTC")

# ----------------- MODULE 1: SITE SAFETY RADAR -----------------
if navigation == "🛡️ Site Safety Radar":
    st.title("🛡️ Site Safety Radar & PPE Compliance Vision")
    st.markdown(f"**Project:** `{project}` | Real-time surveillance & automated hazard detection.")
    
    col1, col2, col3, col4 = st.columns(4)
    col1.metric("Safety Score", "94.2%", "+2.1% this week")
    col2.metric("Active Workers On-site", "64", "Full Attendance")
    col3.metric("PPE Violations (Today)", "2", "-3 vs Yesterday")
    col4.metric("Incident Free Days", "148 Days", "Record High")
    
    st.markdown("---")
    
    c_feed, c_logs = st.columns([1.6, 1.4])
    
    with c_feed:
        st.subheader("📹 Real-time Optical Feeds")
        cam_select = st.selectbox("Select Camera Stream", ["Cam 1 - Main Perimeter & Gate", "Cam 2 - Crane Rig & Hoisting Zone", "Cam 3 - Deep Excavation Pit"])
        
        # Display simulated vision overlay
        st.image(
            "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
            caption=f"Live AI Vision Stream: {cam_select} (YOLOv11 PPE Model)",
            use_container_width=True
        )
        
        col_btn1, col_btn2 = st.columns(2)
        with col_btn1:
            if st.button("🚨 Broadcast Evacuation / Alarm", type="primary"):
                st.error("Audio-Visual site sirens triggered. Protocol 12 initiated.")
        with col_btn2:
            if st.button("📸 Capture Diagnostic Snapshot"):
                st.success("High-res diagnostic frame stored with timestamp.")
                
    with c_logs:
        st.subheader("📋 Live Anomaly & Safety Log")
        
        logs = [
            {"time": "16:42:10", "cam": "Cam 1", "type": "PPE Warning", "desc": "Worker #14 missing High-Vis Vest", "sev": "warning"},
            {"time": "16:38:04", "cam": "Cam 2", "type": "Zone Breach", "desc": "Personnel in suspended crane zone", "sev": "critical"},
            {"time": "16:15:22", "cam": "Cam 3", "type": "PPE Verified", "desc": "Full harness compliance verified for 6 crew", "sev": "compliant"},
            {"time": "15:50:11", "cam": "Cam 1", "type": "Speed Violation", "desc": "Forklift exceeded 15 km/h zone limit", "sev": "warning"},
            {"time": "15:20:00", "cam": "Cam 2", "type": "All Clear", "desc": "Rigging inspection completed & certified", "sev": "compliant"},
        ]
        
        for l in logs:
            badge_class = "badge-critical" if l['sev'] == "critical" else ("badge-warning" if l['sev'] == "warning" else "badge-success")
            st.markdown(f"""
            <div style='background: rgba(255,255,255,0.03); border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-left: 4px solid {"#ef4444" if l['sev']=="critical" else ("#f59e0b" if l['sev']=="warning" else "#10b981")}'>
                <div style='display: flex; justify-content: space-between;'>
                    <strong>{l['time']} &bull; {l['cam']}</strong>
                    <span class='status-badge {badge_class}'>{l['type']}</span>
                </div>
                <div style='color: #cbd5e1; font-size: 0.9rem; margin-top: 4px;'>{l['desc']}</div>
            </div>
            """, unsafe_allow_html=True)

# ----------------- MODULE 2: STRUCTURAL DEFECT ANALYSIS -----------------
elif navigation == "🔍 Structural Defect Analysis":
    st.title("🔍 Deep Structural Crack & Spalling Telemetry")
    st.markdown("Computer vision edge inference to detect sub-millimeter fracture tolerances under ACI 318 standards.")
    
    col_img, col_metrics = st.columns([1.2, 1.8])
    
    with col_img:
        sample = st.selectbox(
            "Select Inspection Specimen",
            ["Concrete Beam Shear Crack", "Retaining Wall Spalling", "Foundation Slab Micro-Fracture"]
        )
        
        sample_details = {
            "Concrete Beam Shear Crack": {
                "img": "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
                "width": "1.45 mm", "depth": "18.2 mm", "sev": "Class III - Moderate High",
                "recommendation": "Epoxy injection with Structural CFRP (Carbon Fiber Reinforced Polymer) wrap along 45° shear plane."
            },
            "Retaining Wall Spalling": {
                "img": "https://images.unsplash.com/photo-1584463674649-5770857de05d?auto=format&fit=crop&w=800&q=80",
                "width": "3.20 mm", "depth": "35.0 mm", "sev": "Class IV - Critical Structural",
                "recommendation": "Emergency mechanical shoring. High-pressure water jetting, rebar passivation, and high-strength polymer mortar."
            },
            "Foundation Slab Micro-Fracture": {
                "img": "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80",
                "width": "0.60 mm", "depth": "8.5 mm", "sev": "Class II - Minor Monitoring",
                "recommendation": "Surface elastomeric sealant coating and monthly strain-gauge telemetry inspection."
            }
        }
        
        info = sample_details[sample]
        st.image(info["img"], caption=f"Specimen: {sample}", use_container_width=True)
        
        uploaded_file = st.file_uploader("Or Upload Custom Structural Scan", type=["jpg", "png", "jpeg"])
        if uploaded_file:
            st.image(uploaded_file, caption="User Uploaded Radiograph/Scan", use_container_width=True)
            
    with col_metrics:
        st.subheader("📊 Structural Telemetry & Diagnostic Report")
        
        c1, c2 = st.columns(2)
        c1.metric("Measured Crack Width", info["width"], "Tolerance: < 0.3mm")
        c2.metric("Penetration Depth", info["depth"], "Invasive limit: 25mm")
        
        st.markdown(f"**Classification Severity:** `{info['sev']}`")
        st.progress(0.75 if "III" in info['sev'] else (0.95 if "IV" in info['sev'] else 0.35))
        
        st.markdown("### 🛠️ Remediation & Engineering Prescription")
        st.info(info["recommendation"])
        
        st.markdown("### 📋 Regulatory Compliance Reference")
        st.write("- **ACI 224R-01**: Control of Cracking in Concrete Structures")
        st.write("- **ASTM C1583**: Tensile Strength of Concrete Surfaces and Bond Strength")
        st.write("- **Eurocode 2**: Design of Concrete Structures (Section 7.3)")

# ----------------- MODULE 3: SCHEDULE & WEATHER PLANNER -----------------
elif navigation == "📅 Schedule & Weather Planner":
    st.title("📅 Intelligent Schedule & Meteorological Risk Planner")
    st.markdown("Predictive Gantt tracking correlated with real-time weather and wind shears.")
    
    w1, w2, w3, w4 = st.columns(4)
    w1.metric("Wind Speed (Crane Limit)", "28 km/h", "Max Limit: 38 km/h")
    w2.metric("Precipitation Probability", "15%", "Clear Window: 48h")
    w3.metric("Ambient Temperature", "24°C", "Optimal Concrete Curing")
    w4.metric("Site Schedule Variance", "+1.5 Days", "Ahead of Schedule")
    
    st.markdown("---")
    st.subheader("📌 Project Milestones & Critical Path")
    
    milestones = pd.DataFrame([
        {"Task": "Site Excavation & Deep Shoring", "Progress (%)": 100, "Start": "Oct 01", "End": "Oct 15", "Risk": "Low"},
        {"Task": "Sub-structure Foundation Pour", "Progress (%)": 82, "Start": "Oct 14", "End": "Oct 28", "Risk": "Medium"},
        {"Task": "Structural Steel Framing (L1-L5)", "Progress (%)": 40, "Start": "Oct 22", "End": "Nov 12", "Risk": "High (Wind)"},
        {"Task": "MEP Conduit Rough-In", "Progress (%)": 15, "Start": "Nov 02", "End": "Nov 25", "Risk": "Low"},
        {"Task": "Exterior Curtain Wall Cladding", "Progress (%)": 0, "Start": "Nov 20", "End": "Dec 15", "Risk": "Low"},
    ])
    
    st.dataframe(milestones, use_container_width=True)
    
    st.markdown("### 📈 Visual Task Progress")
    for _, row in milestones.iterrows():
        st.write(f"**{row['Task']}** ({row['Progress (%)']}%)")
        st.progress(row['Progress (%)'] / 100.0)

# ----------------- MODULE 4: COST & VALUATION ENGINE -----------------
elif navigation == "💰 Cost & Valuation Engine":
    st.title("💰 AI Construction Valuation & Material Cost Engine")
    st.markdown("Dynamic estimation based on square footage, material index, and structural grade.")
    
    c_in1, c_in2 = st.columns(2)
    with c_in1:
        sqft = st.number_input("Total Built-Up Area (sq. ft)", min_value=500, max_value=500000, value=12500, step=500)
        floors = st.slider("Number of Storeys", 1, 50, 6)
    with c_in2:
        mat_grade = st.selectbox("Structural Grade", ["Standard Commercial (M25/M30)", "High-Durability Infrastructure (M40+)", "Luxury Architectural (High Seismic)"])
        region = st.selectbox("Regional Labor & Logistics Tier", ["Metropolitan Tier 1", "Suburban Tier 2", "Industrial Corridor"])
        
    if st.button("🚀 Calculate Estimated Valuation & Bill of Quantities", type="primary"):
        with st.spinner("Processing regional commodity indexes and steel/cement inflation..."):
            time.sleep(0.5)
            rate_per_sqft = 220 if "Standard" in mat_grade else (340 if "High-Durability" in mat_grade else 450)
            if "Tier 1" in region:
                rate_per_sqft *= 1.25
                
            total_cost = sqft * rate_per_sqft
            structural_cost = total_cost * 0.42
            finishes_cost = total_cost * 0.28
            mep_cost = total_cost * 0.18
            contingency = total_cost * 0.12
            
            st.success("Valuation generated successfully!")
            
            m1, m2, m3 = st.columns(3)
            m1.metric("Total Estimated Cost", f"${total_cost:,.0f}")
            m2.metric("Rate per Sq. Ft", f"${rate_per_sqft:,.2f}")
            m3.metric("Contingency Reserve (12%)", f"${contingency:,.0f}")
            
            breakdown_df = pd.DataFrame({
                "Category": ["Structural & Shell", "Architectural Finishes", "MEP & HVAC", "Contingency & Permitting"],
                "Allocation ($)": [structural_cost, finishes_cost, mep_cost, contingency],
                "Share (%)": [42, 28, 18, 12]
            })
            st.bar_chart(breakdown_df.set_index("Category")["Allocation ($)"])

# ----------------- MODULE 5: CONSTRUCTAI ASSISTANT -----------------
elif navigation == "🤖 ConstructAI Assistant":
    st.title("🤖 ConstructAI Field Engineering Assistant")
    st.markdown("Specialized generative agent trained on OSHA regulations, IBC, and structural code standards.")
    
    if "messages" not in st.session_state:
        st.session_state.messages = [
            {"role": "assistant", "content": "Hello! I am **ConstructAI Lead Assistant**. Ask me about OSHA 1926 standards, ACI 318 concrete curing protocols, or site cost optimization."}
        ]
        
    for msg in st.session_state.messages:
        with st.chat_message(msg["role"]):
            st.markdown(msg["content"])
            
    if prompt := st.chat_input("Ask a construction or safety compliance question..."):
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)
            
        with st.chat_message("assistant"):
            if "osha" in prompt.lower() or "safety" in prompt.lower():
                response = "**OSHA Standard 1926.501 (Duty to have fall protection)** requires fall arrest systems for work above 6 feet. Ensure guardrails or personal fall arrest systems (PFAS) are anchored to minimum 5,000 lbs load capacity."
            elif "concrete" in prompt.lower() or "cure" in prompt.lower():
                response = "According to **ACI 308R**, concrete must be maintained above 10°C (50°F) in a moist condition for at least 7 days for standard Portland cement (Type I) to reach adequate design compressive strength."
            else:
                response = f"Analyzed your query: '{prompt}'. Based on current project parameters for `{project}`, all structural tolerances and engineering safeguards are within nominal operating limits."
            st.markdown(response)
            st.session_state.messages.append({"role": "assistant", "content": response})
